import { OpenWeatherService, Current } from '~/services/open-weather';
import { OrdnanceSurveyService } from '~/services/ordnance-survey';
import { OSMapLayer } from '~/types';
import { Interface } from '../interface.js';

type Config = {
  openWeatherService: OpenWeatherService;
  ordnanceSurveyService: OrdnanceSurveyService;
};

export class Implementation implements Interface {
  private readonly openWeatherService: OpenWeatherService;

  private readonly ordnanceSurveyService: OrdnanceSurveyService;

  public constructor(config: Config) {
    this.openWeatherService = config.openWeatherService;
    this.ordnanceSurveyService = config.ordnanceSurveyService;
  }

  public async getCurrentWeather(lat: string, lon: string): Promise<Current> {
    return this.openWeatherService.getCurrent(lat, lon);
  }

  public getMap(layer: OSMapLayer): string {
    return this.ordnanceSurveyService.getMap(layer);
  }
}
