import { describe, it, expect, vi } from 'vitest';
import { debounce, throttle, memoize, pipe, compose, delay, retry } from '../src/function';

describe('function', () => {
  it('debounce', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 100);
    debounced();
    debounced();
    debounced();
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it('throttle', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled();
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(150);
    expect(fn).toHaveBeenCalledTimes(2);
    vi.useRealTimers();
  });

  it('memoize', () => {
    const fn = vi.fn((x: number) => x * 2);
    const memoed = memoize(fn);
    memoed(3);
    memoed(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('pipe/compose', () => {
    const add1 = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    expect(pipe(add1, double)(3)).toBe(8);
    expect(compose(add1, double)(3)).toBe(7);
  });

  it('delay', async () => {
    const start = Date.now();
    await delay(50);
    expect(Date.now() - start).toBeGreaterThanOrEqual(40);
  });

  it('retries then succeeds', async () => {
    let attempts = 0;
    const result = await retry(async () => {
      attempts++;
      if (attempts < 3) throw new Error('fail');
      return 'ok';
    }, 3, 10);
    expect(result).toBe('ok');
    expect(attempts).toBe(3);
  });

  it('retries exhaust and throws', async () => {
    await expect(retry(async () => { throw new Error('always'); }, 2, 10)).rejects.toThrow('always');
  });
});
