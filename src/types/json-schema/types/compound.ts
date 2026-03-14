import { SchemaInternal } from './schema-internal.js';

type OneOf<T, PartialMode extends boolean> = {
  oneOf: Array<SchemaInternal<T, PartialMode>>;
};

type AnyOf<T, PartialMode extends boolean> = {
  anyOf: Array<SchemaInternal<T, PartialMode>>;
};

type AllOf<T, PartialMode extends boolean> = {
  allOf: Array<SchemaInternal<T, PartialMode>>;
};

type If<T, PartialMode extends boolean> = {
  if: SchemaInternal<T, PartialMode>;
};

type Then<T, PartialMode extends boolean> = {
  then: SchemaInternal<T, PartialMode>;
};

type Else<T, PartialMode extends boolean> = {
  else: SchemaInternal<T, PartialMode>;
};

type Not<T, PartialMode extends boolean> = {
  not: SchemaInternal<T, PartialMode>;
};

export type Compound<T, PartialMode extends boolean> =
  | OneOf<T, PartialMode>
  | AnyOf<T, PartialMode>
  | AllOf<T, PartialMode>
  | If<T, PartialMode>
  | Then<T, PartialMode>
  | Else<T, PartialMode>
  | Not<T, PartialMode>;
