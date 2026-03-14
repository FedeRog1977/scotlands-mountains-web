import { SchemaBase } from './schema-base.js';

export type StringSchema<V extends string> = SchemaBase<'string', V> & {
  minLength?: number;
  maxLength?: number;

  pattern?: string;
};
