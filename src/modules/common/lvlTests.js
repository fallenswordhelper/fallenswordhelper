import numberIsNaN from './numberIsNaN';

export const playerLvlTest = [
  (min) => !min,
  (_min, max) => !max,
  (min, max) => numberIsNaN(min) && numberIsNaN(max),
  (min, max, level) => numberIsNaN(min) && level <= max,
  (min, max, level) => min <= level && numberIsNaN(max),
  (min, max, level) => min <= level && level <= max,
];

export function lvlTest(ary, level, min, max) {
  return ary.some((fn) => fn(min, max, level));
}
