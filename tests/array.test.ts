import { describe, it, expect } from 'vitest';
import {
  chunk, unique, groupBy, sortBy, compact, flatten,
  intersection, difference, move, partition
} from '../src/array';

describe('array', () => {
  it('chunk', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(() => chunk([1], 0)).toThrow();
  });

  it('unique', () => {
    expect(unique([1, 1, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  it('groupBy', () => {
    const people = [{ name: 'A', age: 1 }, { name: 'B', age: 2 }, { name: 'C', age: 1 }];
    const grouped = groupBy(people, (p) => String(p.age));
    expect(grouped['1']).toHaveLength(2);
    expect(grouped['2']).toHaveLength(1);
  });

  it('sortBy', () => {
    expect(sortBy([{ n: 3 }, { n: 1 }, { n: 2 }], (x) => x.n)).toEqual([
      { n: 1 }, { n: 2 }, { n: 3 }
    ]);
  });

  it('compact', () => {
    expect(compact([0, 1, '', 'a', null, undefined, false, true])).toEqual([1, 'a', true]);
  });

  it('flatten', () => {
    expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, [5, 6]]);
  });

  it('intersection/difference', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
  });

  it('move', () => {
    expect(move([1, 2, 3], 0, 2)).toEqual([2, 3, 1]);
  });

  it('partition', () => {
    const [even, odd] = partition([1, 2, 3, 4, 5], (n) => n % 2 === 0);
    expect(even).toEqual([2, 4]);
    expect(odd).toEqual([1, 3, 5]);
  });
});
