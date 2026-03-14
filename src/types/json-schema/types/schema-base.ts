import { Compound } from './compound.js';

export type SchemaBase<T extends string, V> = Partial<Compound<V, true>> & {
  type: T;
  title?: string;
  description?: string;
  default?: V;
  const?: V;
  enum?: V[];
};
