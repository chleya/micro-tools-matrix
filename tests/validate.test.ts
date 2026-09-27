import { describe, it, expect } from 'vitest';
import {
  isEmail, isUrl, isPhone, isIPv4, isCreditCard, isEmpty, isPlainObject, isHexColor
} from '../src/validate';

describe('validate', () => {
  it('isEmail', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('bad')).toBe(false);
  });

  it('isUrl', () => {
    expect(isUrl('https://example.com')).toBe(true);
    expect(isUrl('not a url')).toBe(false);
  });

  it('isPhone', () => {
    expect(isPhone('13800138000')).toBe(true);
    expect(isPhone('12345')).toBe(false);
  });

  it('isIPv4', () => {
    expect(isIPv4('192.168.1.1')).toBe(true);
    expect(isIPv4('256.1.1.1')).toBe(false);
  });

  it('isCreditCard', () => {
    expect(isCreditCard('4111111111111111')).toBe(true);
    expect(isCreditCard('1234')).toBe(false);
  });

  it('isEmpty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty('a')).toBe(false);
  });

  it('isPlainObject', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(null)).toBe(false);
  });

  it('isHexColor', () => {
    expect(isHexColor('#fff')).toBe(true);
    expect(isHexColor('#ff0000')).toBe(true);
    expect(isHexColor('red')).toBe(false);
  });
});
