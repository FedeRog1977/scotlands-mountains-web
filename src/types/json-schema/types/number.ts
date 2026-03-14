import { SchemaBase } from './schema-base.js';

export type NumberSchema<V extends number> = SchemaBase<'number', V> & {
  multipleOf?: number;

  minimum?: number;
  exclusiveMinimum?: number;

  maximum?: number;
  exclusiveMaximum?: number;
};
