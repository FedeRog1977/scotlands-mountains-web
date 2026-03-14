import { ISODateString } from '../../iso-date-string.js';
import { ArraySchema } from './array.js';
import { BooleanSchema } from './boolean.js';
import { Compound } from './compound.js';
import { DateSchema } from './date.js';
import { NullSchema } from './null.js';
import { NumberSchema } from './number.js';
import { ObjectSchema } from './object.js';
import { PartialModeWrapper } from './partial.js';
import { Ref } from './ref.js';
import { StringSchema } from './string.js';

export type SchemaInternal<T, PartialMode extends boolean> =
  | Ref
  | Compound<T, PartialMode>
  | (T extends null
      ? PartialModeWrapper<NullSchema, PartialMode>
      : T extends ISODateString
      ? PartialModeWrapper<DateSchema<T>, PartialMode>
      : T extends Date
      ? PartialModeWrapper<DateSchema<ISODateString>, PartialMode>
      : T extends string
      ? // TODO Rewrite to use `StringSchema<T>` for enum/const validation support
        PartialModeWrapper<StringSchema<string>, PartialMode>
      : T extends number
      ? PartialModeWrapper<NumberSchema<T>, PartialMode>
      : T extends boolean
      ? PartialModeWrapper<BooleanSchema<T>, PartialMode>
      : T extends Array<infer T2>
      ? PartialModeWrapper<ArraySchema<T2, PartialMode>, PartialMode>
      : T extends object
      ? PartialModeWrapper<ObjectSchema<T, PartialMode>, PartialMode>
      : never);
