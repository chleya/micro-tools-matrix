import { describe, it, expect } from 'vitest';
import {
  formatDate, addDays, addMonths, daysBetween,
  isToday, isSameDay, timeAgo, startOfDay, endOfDay
} from '../src/date';

describe('date', () => {
  it('formatDate', () => {
    expect(formatDate(new Date(2024, 0, 5))).toBe('2024-01-05');
  });

  it('addDays', () => {
    const d = new Date(2024, 0, 1);
    expect(addDays(d, 3)).toEqual(new Date(2024, 0, 4));
  });

  it('addMonths', () => {
    expect(addMonths(new Date(2024, 0, 15), 2)).toEqual(new Date(2024, 2, 15));
  });

  it('daysBetween', () => {
    expect(daysBetween(new Date(2024, 0, 1), new Date(2024, 0, 11))).toBe(10);
  });

  it('isToday', () => {
    expect(isToday(new Date())).toBe(true);
  });

  it('isSameDay', () => {
    expect(isSameDay(new Date(2024, 0, 1, 10), new Date(2024, 0, 1, 20))).toBe(true);
  });

  it('timeAgo', () => {
    expect(timeAgo(new Date(Date.now() - 3000))).toBe('just now');
    expect(timeAgo(new Date(Date.now() - 60000 * 5))).toBe('5 minutes ago');
  });

  it('startOfDay/endOfDay', () => {
    const d = new Date(2024, 5, 15, 14, 30);
    expect(startOfDay(d).getHours()).toBe(0);
    expect(endOfDay(d).getHours()).toBe(23);
  });
});
