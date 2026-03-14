import { Current } from '~/services/open-weather';
import { OSMapLayer } from '~/types';

export interface Interface {
  getCurrentWeather: (lat: string, lon: string) => Promise<Current>;
  getMap: (layer: OSMapLayer) => string;
}
