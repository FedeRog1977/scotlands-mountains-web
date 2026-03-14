/* eslint-disable no-console */

import {
  faCloud,
  faCloudMoon,
  faCloudMoonRain,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faMoon,
  faSmog,
  faSnowflake,
  faSun,
  faThunderstorm,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import fetch from 'node-fetch';
import { Validator } from '~/services/validator-ajv';
import { getParsedDate, getSuffixedString, getUppercaseFirst } from '~/utils';
import { weatherResponseValidationSchema } from './constants/weather-response-validation-schema.js';
import { Interface } from './interface.js';
import { Current } from './types/current.js';
import { Daily } from './types/daily.js';
import { General } from './types/general.js';
import { Hourly } from './types/hourly.js';
import { Minutely } from './types/minutely.js';
import { WeatherResponse } from './types/weather-response.js';

type Config = {
  baseUrl: string;
  apiKey: string;
  validator: Validator;
};

export class Implementation implements Interface {
  private readonly baseUrl: string;

  private readonly apiKey: string;

  private readonly validator: Validator;

  public constructor(config: Config) {
    this.baseUrl = config.baseUrl;
    this.apiKey = config.apiKey;
    this.validator = config.validator;
  }

  private get weatherUrl(): string {
    return `${this.baseUrl}?lat=:lat&lon=:lon&appid=${this.apiKey}&units=metric`;
  }

  public async getCurrent(lat: string, lon: string): Promise<Current> {
    const apiUrl = this.weatherUrl.replace(':lat', lat).replace(':lon', lon);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      weatherResponseValidationSchema,
    );

    const mappedValidResponseData = this.mapCurrent(validResponseData.current);

    try {
      return mappedValidResponseData;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid current weather data received');
    }
  }

  public async getDaily(lat: string, lon: string): Promise<Daily> {
    const apiUrl = this.weatherUrl.replace(':lat', lat).replace(':lon', lon);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      weatherResponseValidationSchema,
    );

    try {
      // TODO: this is incorrect, map to return type
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return validResponseData.daily as unknown as Daily;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid daily weather data received');
    }
  }

  public async getGeneral(lat: string, lon: string): Promise<General> {
    const apiUrl = this.weatherUrl.replace(':lat', lat).replace(':lon', lon);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      weatherResponseValidationSchema,
    );

    try {
      return {
        lat: validResponseData.lat,
        lon: validResponseData.lon,
        timezone: validResponseData.timezone,
        timezoneOffset: validResponseData.timezone_offset,
      };
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid general weather data received');
    }
  }

  public async getHourly(lat: string, lon: string): Promise<Hourly> {
    const apiUrl = this.weatherUrl.replace(':lat', lat).replace(':lon', lon);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      weatherResponseValidationSchema,
    );

    try {
      // TODO: this is incorrect, map to return type
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return validResponseData.hourly as unknown as Hourly;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid hourly weather data received');
    }
  }

  public async getMinutely(lat: string, lon: string): Promise<Minutely> {
    const apiUrl = this.weatherUrl.replace(':lat', lat).replace(':lon', lon);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      weatherResponseValidationSchema,
    );

    try {
      // TODO: this is incorrect, map to return type
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return validResponseData.minutely as unknown as Minutely;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid minutely weather data received');
    }
  }

  private mapCurrent(currentResponse: WeatherResponse['current']): Current {
    const mappedWeather: Current['weather'] = [];

    for (const weather of currentResponse.weather) {
      mappedWeather.push(this.mapWeather(weather));
    }

    return {
      dateTime: getParsedDate<string>(currentResponse.dt, 'UK_CALENDAR'),
      sunrise: getParsedDate<string>(currentResponse.sunrise, 'TIME_OF_DAY'),
      sunset: getParsedDate<string>(currentResponse.sunset, 'TIME_OF_DAY'),
      temperature: getSuffixedString(currentResponse.temp, '°'),
      temperatureFeelsLike: getSuffixedString(currentResponse.feels_like, '°'),
      pressure: getSuffixedString(currentResponse.pressure, ' mb'),
      humidity: getSuffixedString(currentResponse.humidity, '%'),
      dewPoint: getSuffixedString(currentResponse.dew_point, '°'),
      ultravioletIndex: `${currentResponse.uvi}`,
      cloudCover: getSuffixedString(currentResponse.clouds, '%'),
      visibility: getSuffixedString(currentResponse.visibility, ' m'),
      windSpeed: getSuffixedString(currentResponse.wind_speed, ' m/s'),
      windDirection: getSuffixedString(currentResponse.wind_deg, '°'),
      windGust: currentResponse.wind_gust
        ? getSuffixedString(currentResponse.wind_gust, '°')
        : undefined,
      weather: mappedWeather,
      // TODO: implement
      inversionProbability: '100',
    };
  }

  private mapWeather(
    weatherResponse: WeatherResponse['current']['weather'][number],
  ): Current['weather'][number] {
    return {
      main: weatherResponse.main,
      description: getUppercaseFirst(weatherResponse.description),
      icon: this.mapWeatherIcon(weatherResponse.icon),
    };
  }

  private mapWeatherIcon(icon: string): IconDefinition {
    switch (icon) {
      case '01d':
        return faSun;

      case '01n':
        return faMoon;

      case '02d':
        return faCloudSun;

      case '02n':
        return faCloudMoon;

      case '03d':
        return faCloud;

      case '04d':
        return faCloud;

      case '03n':
        return faCloud;

      case '04n':
        return faCloud;

      case '09d':
        return faCloudSunRain;

      case '09n':
        return faCloudMoonRain;

      case '10d':
        return faCloudRain;

      case '10n':
        return faCloudRain;

      case '11d':
        return faThunderstorm;

      case '11n':
        return faThunderstorm;

      case '13d':
        return faSnowflake;

      case '13n':
        return faSnowflake;

      case '50d':
        return faSmog;

      case '50n':
        return faSmog;

      default:
        return faSun;
    }
  }
}
