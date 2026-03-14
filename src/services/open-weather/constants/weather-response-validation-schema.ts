/* eslint-disable camelcase */

import { JSONSchema } from '~/types';
import { WeatherResponse } from '../types/weather-response.js';

const weatherValidationSchema: JSONSchema<
  | WeatherResponse['current']['weather'][number]
  | WeatherResponse['daily'][number]['weather'][number]
  | WeatherResponse['hourly'][number]['weather'][number]
> = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    main: { type: 'string' },
    description: { type: 'string' },
    icon: { type: 'string' },
  },
  required: ['id', 'main', 'description', 'icon'],
};

const minutelyValidationSchema: JSONSchema<WeatherResponse['minutely'][number]> = {
  type: 'object',
  properties: {
    dt: { type: 'date' },
    precipitation: { type: 'number' },
  },
  required: ['dt', 'precipitation'],
};

const currentValidationSchema: JSONSchema<WeatherResponse['current']> = {
  type: 'object',
  properties: {
    dt: { type: 'date' },
    sunrise: { type: 'date' },
    sunset: { type: 'date' },
    temp: { type: 'number' },
    feels_like: { type: 'number' },
    pressure: { type: 'number' },
    humidity: { type: 'number' },
    dew_point: { type: 'number' },
    uvi: { type: 'number' },
    clouds: { type: 'number' },
    visibility: { type: 'number' },
    wind_speed: { type: 'number' },
    wind_gust: { type: 'number' },
    wind_deg: { type: 'number' },
    weather: { type: 'array', items: weatherValidationSchema },
  },
  required: [
    'dt',
    'sunrise',
    'sunset',
    'temp',
    'feels_like',
    'pressure',
    'humidity',
    'dew_point',
    'uvi',
    'clouds',
    'visibility',
    'wind_speed',
    'wind_deg',
    'weather',
  ],
};

const hourlyValidationSchema: JSONSchema<WeatherResponse['hourly'][number]> = {
  type: 'object',
  properties: {
    dt: { type: 'date' },
    temp: { type: 'number' },
    feels_like: { type: 'number' },
    pressure: { type: 'number' },
    humidity: { type: 'number' },
    dew_point: { type: 'number' },
    uvi: { type: 'number' },
    clouds: { type: 'number' },
    visibility: { type: 'number' },
    wind_speed: { type: 'number' },
    wind_gust: { type: 'number' },
    wind_deg: { type: 'number' },
    weather: { type: 'array', items: weatherValidationSchema },
    pop: { type: 'number' },
  },
  required: [
    'dt',
    'temp',
    'feels_like',
    'pressure',
    'humidity',
    'dew_point',
    'uvi',
    'clouds',
    'visibility',
    'wind_speed',
    'wind_deg',
    'weather',
    'pop',
  ],
};

const dailyValidationSchema: JSONSchema<WeatherResponse['daily'][number]> = {
  type: 'object',
  properties: {
    dt: { type: 'date' },
    sunrise: { type: 'date' },
    sunset: { type: 'date' },
    moonrise: { type: 'number' },
    moonset: { type: 'number' },
    moon_phase: { type: 'number' },
    summary: { type: 'string' },
    temp: {
      type: 'object',
      properties: {
        min: { type: 'number' },
        max: { type: 'number' },
        day: { type: 'number' },
        night: { type: 'number' },
        morn: { type: 'number' },
        eve: { type: 'number' },
      },
      required: ['min', 'max', 'day', 'night', 'morn', 'eve'],
    },
    feels_like: {
      type: 'object',
      properties: {
        day: { type: 'number' },
        night: { type: 'number' },
        morn: { type: 'number' },
        eve: { type: 'number' },
      },
      required: ['day', 'night', 'morn', 'eve'],
    },
    pressure: { type: 'number' },
    humidity: { type: 'number' },
    dew_point: { type: 'number' },
    wind_speed: { type: 'number' },
    wind_gust: { type: 'number' },
    wind_deg: { type: 'number' },
    weather: { type: 'array', items: weatherValidationSchema },
    clouds: { type: 'number' },
    pop: { type: 'number' },
    rain: { type: 'number' },
    uvi: { type: 'number' },
  },
  required: [
    'dt',
    'sunrise',
    'sunset',
    'moonrise',
    'moonset',
    'moon_phase',
    'summary',
    'temp',
    'feels_like',
    'pressure',
    'humidity',
    'dew_point',
    'wind_speed',
    'wind_deg',
    'weather',
    'clouds',
    'pop',
    'uvi',
  ],
};

export const weatherResponseValidationSchema: JSONSchema<WeatherResponse> = {
  type: 'object',
  properties: {
    lat: { type: 'number' },
    lon: { type: 'number' },
    timezone: { type: 'string' },
    timezone_offset: { type: 'number' },
    current: currentValidationSchema,
    minutely: { type: 'array', items: minutelyValidationSchema },
    hourly: { type: 'array', items: hourlyValidationSchema },
    daily: { type: 'array', items: dailyValidationSchema },
  },
  required: ['lat', 'lon', 'timezone', 'timezone_offset', 'current', 'minutely', 'hourly', 'daily'],
};
