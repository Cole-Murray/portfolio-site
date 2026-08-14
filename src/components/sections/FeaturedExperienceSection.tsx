import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { featuredRole } from "@/content";
import { SECTION_IDS } from "@/lib/constants";

export function FeaturedExperienceSection() {
  return (
    <Section
      id={SECTION_IDS.featured}
      index="03"
      label="featured experience"
      className="border-y border-line/70"
      headerClassName="mb-10 md:mb-14"
    >
      <article className="reveal">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="flex min-w-0 flex-col gap-5 xl:flex-row xl:items-start xl:gap-6">
            {featuredRole.logoSrc ? (
              /*
               * Beside the heading the tile squares off to the heading's exact
               * height: two line boxes plus the 0.5rem gap between them. The
               * type scale here mirrors the h2 only so `lh` resolves to the
               * same line box — the wrapper renders no text of its own. The
               * pairing waits until xl because narrower columns wrap the job
               * title onto a second line, which the 2lh assumption can't track.
               */
              <div className="relative size-14 shrink-0 xl:size-[calc(2lh+0.5rem)] xl:text-6xl/[0.98]">
                <Image
                  src={featuredRole.logoSrc}
                  alt=""
                  fill
                  sizes="128px"
                  className="rounded-[27%] object-contain ring-1 ring-line-strong/70"
                />
              </div>
            ) : null}

            <h2 className="max-w-4xl font-display text-4xl leading-[0.98] tracking-[-0.04em] text-fg sm:text-5xl md:text-6xl">
              <span className="block">{featuredRole.title}</span>
              <span className="sr-only"> at </span>
              <span className="mt-2 block text-muted">{featuredRole.org}</span>
            </h2>
          </div>

          <div className="shrink-0 space-y-2 font-mono text-xs uppercase tracking-widest text-faint md:pt-2 md:text-right">
            <p>
              <time dateTime={featuredRole.startedOn}>{featuredRole.dates}</time>
            </p>
            <p>{featuredRole.location}</p>
          </div>
        </div>

        {featuredRole.summary ? (
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-fg md:mt-14 md:text-xl">
            {featuredRole.summary}
          </p>
        ) : null}

        <ul className="mt-10 max-w-3xl space-y-6 md:mt-12">
          {featuredRole.bullets.map((bullet) => (
            <li
              key={bullet}
              className="reveal flex items-start gap-4 text-base leading-relaxed text-muted"
            >
              <span
                aria-hidden="true"
                className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <ul aria-label="Technologies used" className="mt-10 flex flex-wrap gap-2">
          {featuredRole.tech.map((technology) => (
            <li key={technology} className="chip">
              {technology}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}
