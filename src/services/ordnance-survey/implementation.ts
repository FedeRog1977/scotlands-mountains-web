import { OSMapLayer } from '~/types';

// import { Validator } from '~/services/validator-ajv';
import { Interface } from './interface.js';

type Config = {
  baseUrl: string;
  apiKey: string;
  // validator: Validator;
};

export class Implementation implements Interface {
  private readonly baseUrl: string;

  private readonly apiKey: string;

  // private readonly validator: Validator;

  public constructor(config: Config) {
    this.baseUrl = config.baseUrl;
    this.apiKey = config.apiKey;
    // this.validator = config.validator;
  }

  private get mapUrl(): string {
    return `${this.baseUrl}/:layer/{z}/{x}/{y}.png?key=${this.apiKey}`;
  }

  public getMap(layer: OSMapLayer): string {
    return this.mapUrl.replace(':layer', layer);
  }
}
