import { JSONSchema } from '../json-schema.js';
import { SchemaBase } from './schema-base.js';
import { SchemaInternal } from './schema-internal.js';

export type ObjectSchema<T extends object, PartialMode extends boolean> = SchemaBase<
  'object',
  T
> & {
  maxProperties?: number;
  minProperties?: number;

  properties: true extends PartialMode
    ? {
        [K in keyof T]?: SchemaInternal<Required<T>[K], PartialMode>;
      }
    : {
        [K in keyof T]-?: SchemaInternal<Required<T>[K], PartialMode>;
      };
  required?: Array<keyof T>;
  additionalProperties?: boolean;

  dependentRequired?: {
    [K in keyof T]?: Array<Exclude<keyof T, K>>;
  };
  dependentSchemas?: Partial<Record<keyof T, Partial<JSONSchema<T>>>>;
};
