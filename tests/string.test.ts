import { describe, it, expect } from 'vitest';
import {
  camelCase, kebabCase, snakeCase, truncate, capitalize,
  padLeft, padRight, stripHtml, repeat, startsWithAny
} from '../src/string';

describe('string', () => {
  it('camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
    expect(camelCase('hello_world')).toBe('helloWorld');
    expect(camelCase('Hello World')).toBe('helloWorld');
  });

  it('kebabCase', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
    expect(kebabCase('hello_world')).toBe('hello-world');
  });

  it('snakeCase', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
    expect(snakeCase('hello-world')).toBe('hello_world');
  });

  it('truncate', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
    expect(truncate('hi', 8)).toBe('hi');
  });

  it('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
  });

  it('padLeft/padRight', () => {
    expect(padLeft('5', 3, '0')).toBe('005');
    expect(padRight('5', 3, '0')).toBe('500');
  });

  it('stripHtml', () => {
    expect(stripHtml('<p>hello <b>world</b></p>')).toBe('hello world');
  });

  it('repeat', () => {
    expect(repeat('ab', 3)).toBe('ababab');
    expect(() => repeat('a', -1)).toThrow();
  });

  it('startsWithAny', () => {
    expect(startsWithAny('hello', ['hi', 'he'])).toBe(true);
    expect(startsWithAny('hello', ['xx', 'yy'])).toBe(false);
  });
});
