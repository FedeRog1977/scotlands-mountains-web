import { ENV, SemanticVersion } from '~/types';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: ENV;
      APP_VERSION: SemanticVersion;
      OPEN_WEATHER_API_KEY: string;
      OS_API_KEY: string;
    }
  }
}
