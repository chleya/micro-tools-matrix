/**
 * Number utilities
 */

/** Clamp a number between min and max */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

/** Generate a random integer between min and max (inclusive) */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Sum an array of numbers */
export function sum(arr: number[]): number {
  return arr.reduce((acc, n) => acc + n, 0);
}

/** Average of an array of numbers */
export function average(arr: number[]): number {
  if (arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

/** Round to a specific number of decimal places */
export function roundTo(num: number, decimals = 2): number {
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}

/** Convert a number to a padded string (e.g. 5 -> "005") */
export function padNumber(num: number, length = 2): string {
  return String(num).padStart(length, '0');
}

/** Format a number with thousand separators */
export function formatNumber(num: number, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale).format(num);
}

/** Convert bytes to human-readable string */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}

/** Check if a number is between min and max (inclusive) */
export function inRange(num: number, min: number, max: number): boolean {
  return num >= min && num <= max;
}

/** Generate a range of numbers */
export function range(start: number, end: number, step = 1): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}
