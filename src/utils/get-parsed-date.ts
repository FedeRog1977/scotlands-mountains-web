/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/consistent-type-assertions */

import dayjs from './get-extended-day-js.js';

export const getParsedDate = <T = string | boolean>(
  date: Date,
  config:
    | 'TIME_OF_DAY'
    | 'TIME_OF_DAY_HUMAN'
    | 'UK_CALENDAR'
    | 'ISO'
    | 'IS_PAST'
    | 'IS_PRESENT'
    | 'IS_FUTURE',
): T => {
  const dateNow = dayjs().tz('Europe/London');
  const dateParsed = dayjs(date).tz('Europe/London');

  switch (config) {
    case 'TIME_OF_DAY':
      return dateParsed.format('HH:mm') as T;

    case 'TIME_OF_DAY_HUMAN':
      return dateParsed.minute() === 0
        ? (dateParsed.format('ha') as T)
        : (dateParsed.format('h:mma') as T);

    case 'UK_CALENDAR':
      return dateParsed.format('DD/M/YYYY') as T;

    case 'ISO':
      return dateParsed.toISOString().split('T')[0]! as T;

    case 'IS_PAST':
      return dateParsed.isBefore(dateNow) as T;

    case 'IS_PRESENT':
      return dateParsed.isSame(dateNow, 'day') as T;

    case 'IS_FUTURE':
      return dateParsed.isAfter(dateNow) as T;
  }
};
