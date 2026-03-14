import { baseUrls } from '~/constants';
import { OpenWeatherServiceClient } from '~/services/open-weather';
import { OrdnanceSurveyServiceClient } from '~/services/ordnance-survey';
import { ValidatorAjv } from '~/services/validator-ajv';
import { Implementation as ImplementationClient } from './client/implementation.js';
import { Interface } from './interface.js';
import { Implementation as ImplementationTest } from './test/implementation.js';

const getFacade = (): Interface => {
  if (process.env.APP_ENV === 'local') {
    return new ImplementationTest();
  }

  const validatorAjv = new ValidatorAjv();

  const openWeatherServiceClient = new OpenWeatherServiceClient({
    baseUrl: baseUrls.openWeather,
    apiKey: process.env.OPEN_WEATHER_API_KEY,
    validator: validatorAjv,
  });

  const ordnanceSurveyServiceClient = new OrdnanceSurveyServiceClient({
    baseUrl: baseUrls.ordnanceSurvey,
    apiKey: process.env.OS_API_KEY,
  });

  return new ImplementationClient({
    openWeatherService: openWeatherServiceClient,
    ordnanceSurveyService: ordnanceSurveyServiceClient,
  });
};

/**
 * If I ever care to skip build time environment variables,
 * this must only be invoked server-side, not here
 */
export const facade = getFacade();
