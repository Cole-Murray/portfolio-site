type ClassValue = string | number | null | undefined | false;

/** Join conditional class names. Small enough not to warrant a dependency. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
