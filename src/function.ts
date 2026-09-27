/**
 * Function utilities
 */

/** Debounce a function */
export function debounce<T extends (...args: never[]) => void>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

/** Throttle a function */
export function throttle<T extends (...args: never[]) => void>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    const remaining = wait - (now - lastCall);
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      lastCall = now;
      fn(...args);
    } else if (!timer) {
      timer = setTimeout(() => {
        lastCall = Date.now();
        timer = null;
        fn(...args);
      }, remaining);
    }
  };
}

/** Memoize a function */
export function memoize<T extends (...args: unknown[]) => unknown>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>();
  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key)!;
    const result = fn(...args) as ReturnType<T>;
    cache.set(key, result);
    return result;
  };
}

/** Curry a function */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function curry(fn: (...args: any[]) => any): (...args: any[]) => any {
  return function curried(...args: unknown[]): unknown {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...next: unknown[]) => curried(...args, ...next);
  };
}

/** Pipe functions left-to-right */
export function pipe<T>(...fns: ((x: T) => T)[]) {
  return (x: T): T => fns.reduce((acc, fn) => fn(acc), x);
}

/** Compose functions right-to-left */
export function compose<T>(...fns: ((x: T) => T)[]) {
  return (x: T): T => fns.reduceRight((acc, fn) => fn(acc), x);
}

/** Delay execution */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Retry an async function with max attempts */
export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts = 3,
  delayMs = 100
): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (i < maxAttempts - 1) await delay(delayMs * (i + 1));
    }
  }
  throw lastError;
}
