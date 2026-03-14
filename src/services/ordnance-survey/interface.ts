import { OSMapLayer } from '~/types';

export interface Interface {
  getMap: (layer: OSMapLayer) => string;
}
