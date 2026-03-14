type Suffix = '%' | '°' | ' mi' | ' m/h' | ' ft' | ' m' | ' km' | ' m/s' | ' mb';

export const getSuffixedString = (string: number, suffix: Suffix): string =>
  `${string.toFixed(0)}${suffix}`;
