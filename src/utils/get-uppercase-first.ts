export const getUppercaseFirst = <S extends string>(input: S): Capitalize<S> =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  `${input.slice(0, 1).toUpperCase()}${input.slice(1)}` as Capitalize<S>;
