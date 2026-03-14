import { Current } from '~/services/open-weather';
import { Interface } from '../interface.js';
import { mockCurrentWeather } from './data/mock-current.js';
import { mockMap } from './data/mock-map.js';

export class Implementation implements Interface {
  public async getCurrentWeather(): Promise<Current> {
    return Promise.resolve(mockCurrentWeather);
  }

  public getMap(): string {
    return mockMap;
  }
}
