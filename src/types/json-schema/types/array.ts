import { SchemaBase } from './schema-base.js';
import { SchemaInternal } from './schema-internal.js';

export type ArraySchema<T, PartialMode extends boolean> = SchemaBase<'array', T[]> & {
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
  items: SchemaInternal<T, PartialMode>;
};
