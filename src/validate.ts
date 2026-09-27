/**
 * Validation utilities
 */

/** Check if value is a valid email */
export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Check if value is a valid URL */
export function isUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

/** Check if value is a valid phone number (CN) */
export function isPhone(value: string): boolean {
  return /^1[3-9]\d{9}$/.test(value);
}

/** Check if value is a valid IPv4 address */
export function isIPv4(value: string): boolean {
  return /^(\d{1,3}\.){3}\d{1,3}$/.test(value) &&
    value.split('.').every((octet) => {
      const n = Number(octet);
      return n >= 0 && n <= 255;
    });
}

/** Check if value is a valid credit card number (Luhn) */
export function isCreditCard(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  if (digits.length < 13 || digits.length > 19) return false;
  let sum = 0;
  let shouldDouble = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = Number(digits[i]);
    if (shouldDouble) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

/** Check if value is empty (null, undefined, '', [], {}) */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/** Check if value is a plain object */
export function isPlainObject(value: unknown): boolean {
  if (typeof value !== 'object' || value === null) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

/** Check if value is a valid hex color */
export function isHexColor(value: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value);
}
