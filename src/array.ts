/**
 * Array utilities
 */

/** Chunk an array into arrays of size n */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new RangeError('size must be positive');
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/** Remove duplicate values from an array */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

/** Group array items by a key function */
export function groupBy<T>(arr: T[], keyFn: (item: T) => string): Record<string, T[]> {
  return arr.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

/** Sort array by a key function */
export function sortBy<T>(arr: T[], keyFn: (item: T) => string | number): T[] {
  return [...arr].sort((a, b) => {
    const ka = keyFn(a);
    const kb = keyFn(b);
    if (ka < kb) return -1;
    if (ka > kb) return 1;
    return 0;
  });
}

/** Remove falsy values from an array */
export function compact<T>(arr: (T | null | undefined | '' | 0 | false)[]): T[] {
  return arr.filter(Boolean) as T[];
}

/** Flatten a nested array one level */
export function flatten<T>(arr: (T | T[])[]): T[] {
  return arr.reduce<T[]>((acc, item) => acc.concat(Array.isArray(item) ? item : [item]), []);
}

/** Get the intersection of two arrays */
export function intersection<T>(a: T[], b: T[]): T[] {
  const setB = new Set(b);
  return a.filter((x) => setB.has(x));
}

/** Get the difference between two arrays */
export function difference<T>(a: T[], b: T[]): T[] {
  const setB = new Set(b);
  return a.filter((x) => !setB.has(x));
}

/** Move an array element from one index to another */
export function move<T>(arr: T[], from: number, to: number): T[] {
  const result = [...arr];
  const [item] = result.splice(from, 1);
  result.splice(to, 0, item);
  return result;
}

/** Split array into two groups based on predicate */
export function partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]] {
  const pass: T[] = [];
  const fail: T[] = [];
  for (const item of arr) {
    if (predicate(item)) pass.push(item);
    else fail.push(item);
  }
  return [pass, fail];
}
