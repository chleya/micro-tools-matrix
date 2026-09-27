import { describe, it, expect } from 'vitest';
import {
  pick, omit, deepClone, deepMerge, flattenObject, shallowEqual, getPath
} from '../src/object';

describe('object', () => {
  it('pick', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('omit', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
  });

  it('deepClone', () => {
    const obj = { a: 1, b: { c: [1, 2, 3] } };
    const cloned = deepClone(obj);
    cloned.b.c.push(4);
    expect(obj.b.c).toEqual([1, 2, 3]);
  });

  it('deepMerge', () => {
    const target = { a: 1, b: { c: 2, d: 3 } };
    const source = { b: { c: 99, e: 5 } };
    const merged = deepMerge(target, source);
    expect(merged).toEqual({ a: 1, b: { c: 99, d: 3, e: 5 } });
  });

  it('flattenObject', () => {
    expect(flattenObject({ a: { b: 1, c: { d: 2 } } })).toEqual({ 'a.b': 1, 'a.c.d': 2 });
  });

  it('shallowEqual', () => {
    expect(shallowEqual({ a: 1 }, { a: 1 })).toBe(true);
    expect(shallowEqual({ a: 1 }, { a: 2 })).toBe(false);
  });

  it('getPath', () => {
    const obj = { a: { b: { c: 42 } } };
    expect(getPath(obj, 'a.b.c')).toBe(42);
    expect(getPath(obj, 'a.x.y', 'default')).toBe('default');
  });
});
