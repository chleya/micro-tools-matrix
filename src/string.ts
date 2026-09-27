/**
 * String utilities
 */

/** Convert a string to camelCase */
export function camelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^[A-Z]/, (c) => c.toLowerCase());
}

/** Convert a string to kebab-case */
export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/** Convert a string to snake_case */
export function snakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

/** Truncate a string to max length with an ellipsis */
export function truncate(str: string, maxLength: number, suffix = '...'): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, Math.max(0, maxLength - suffix.length)) + suffix;
}

/** Capitalize the first letter */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Pad a string on the left to target length */
export function padLeft(str: string, length: number, char = ' '): string {
  str = String(str);
  while (str.length < length) str = char + str;
  return str;
}

/** Pad a string on the right to target length */
export function padRight(str: string, length: number, char = ' '): string {
  str = String(str);
  while (str.length < length) str = str + char;
  return str;
}

/** Remove all HTML tags from a string */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/** Repeat a string n times */
export function repeat(str: string, n: number): string {
  if (n < 0) throw new RangeError('repeat count must be non-negative');
  return Array(n + 1).join(str);
}

/** Check if a string starts with any of the given prefixes */
export function startsWithAny(str: string, prefixes: string[]): boolean {
  return prefixes.some((p) => str.startsWith(p));
}
