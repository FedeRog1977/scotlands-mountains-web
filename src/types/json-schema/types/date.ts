import { ISODateString } from '../../iso-date-string.js';
import { SchemaBase } from './schema-base.js';

export type DateSchema<V extends ISODateString> = SchemaBase<'date', V> & {
  min?: ISODateString;
  max?: ISODateString;
};
