import { describe, it, expect } from 'vitest';
import {
  clamp, randomInt, sum, average, roundTo, padNumber,
  formatNumber, formatBytes, inRange, range
} from '../src/number';

describe('number', () => {
  it('clamp', () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('randomInt', () => {
    for (let i = 0; i < 100; i++) {
      const n = randomInt(1, 10);
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(10);
    }
  });

  it('sum/average', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(average([2, 4, 6])).toBe(4);
    expect(average([])).toBe(0);
  });

  it('roundTo', () => {
    expect(roundTo(3.14159, 2)).toBe(3.14);
  });

  it('padNumber', () => {
    expect(padNumber(5, 3)).toBe('005');
  });

  it('formatNumber', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('formatBytes', () => {
    expect(formatBytes(0)).toBe('0 Bytes');
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1024 * 1024)).toBe('1 MB');
  });

  it('inRange', () => {
    expect(inRange(5, 0, 10)).toBe(true);
    expect(inRange(-1, 0, 10)).toBe(false);
  });

  it('range', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
  });
});
