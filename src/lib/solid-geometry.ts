/**
 * Hand-built polyhedra for the hero solid.
 *
 * Each shape is a vertex list plus faces wound as closed loops. Everything is
 * normalised to a unit radius so the renderer's camera and scale constants work
 * unchanged whichever shape is selected.
 */

export type Point3 = readonly [number, number, number];

export interface Solid {
  points: readonly Point3[];
  /** Vertex-index loops. Rendered back-to-front, so winding does not matter. */
  faces: readonly (readonly number[])[];
  /**
   * How many leading entries of `faces` are outward-facing caps. Everything
   * after them is an extrusion wall, which the renderer fills in the secondary
   * colour. Shapes with no extrusion set this to the full face count.
   */
  capCount: number;
}

function normalize(points: Point3[]): Point3[] {
  const longest = Math.max(...points.map(([x, y, z]) => Math.hypot(x, y, z)));
  return points.map(([x, y, z]) => [x / longest, y / longest, z / longest]);
}

const PHI = (1 + Math.sqrt(5)) / 2;

/** Twenty faces, twelve vertices — three nested golden rectangles. */
export function icosahedron(): Solid {
  const raw: Point3[] = [];
  for (const a of [1, -1]) {
    for (const b of [1, -1]) {
      raw.push([0, a, b * PHI]);
      raw.push([a, b * PHI, 0]);
      raw.push([b * PHI, 0, a]);
    }
  }

  const points = normalize(raw);

  /*
   * Every edge of this construction has the same length, so adjacency falls out
   * of the squared distance rather than a hand-typed table of thirty pairs.
   */
  const target = (2 / Math.hypot(1, PHI)) ** 2;
  const adjacent = (i: number, j: number) => {
    const [ax, ay, az] = points[i];
    const [bx, by, bz] = points[j];
    const distanceSq = (ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2;
    return Math.abs(distanceSq - target) < 0.01;
  };

  // Any three mutually adjacent vertices bound a face.
  const faces: number[][] = [];
  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      if (!adjacent(i, j)) continue;
      for (let k = j + 1; k < points.length; k += 1) {
        if (adjacent(j, k) && adjacent(i, k)) faces.push([i, j, k]);
      }
    }
  }

  return { points, faces, capCount: faces.length };
}

/**
 * Block I, extruded into a slab.
 *
 * The outline is traced once as twelve points, then duplicated front and back.
 * Faces are the two caps plus one quad per outline segment. Proportions are a
 * nod to the Illinois mark rather than a measured reproduction of it — the
 * constants below are the dials worth turning.
 */
export function blockI(): Solid {
  const W = 0.6; // half-width of the top and bottom bars
  const S = 0.22; // half-width of the stem
  const H = 0.78; // half-height overall
  const T = 0.4; // bar thickness (top / bottom slabs)
  const D = 0.2; // half-depth of the extrusion

  const outline: Array<[number, number]> = [
    [-W, H],
    [W, H],
    [W, H - T],
    [S, H - T],
    [S, -(H - T)],
    [W, -(H - T)],
    [W, -H],
    [-W, -H],
    [-W, -(H - T)],
    [-S, -(H - T)],
    [-S, H - T],
    [-W, H - T],
  ];

  const count = outline.length;
  const raw: Point3[] = [
    ...outline.map(([x, y]): Point3 => [x, y, D]),
    ...outline.map(([x, y]): Point3 => [x, y, -D]),
  ];

  // Caps first, then the walls — the renderer keys its colours off that split.
  const faces: number[][] = [
    Array.from({ length: count }, (_, i) => i),
    Array.from({ length: count }, (_, i) => 2 * count - 1 - i),
  ];
  const capCount = faces.length;

  for (let i = 0; i < count; i += 1) {
    const next = (i + 1) % count;
    faces.push([i, next, count + next, count + i]);
  }

  return { points: normalize(raw), faces, capCount };
}

export const SOLID_SHAPES = {
  icosahedron,
  "block-i": blockI,
} as const;

export type SolidShape = keyof typeof SOLID_SHAPES;
