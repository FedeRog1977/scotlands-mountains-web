import { Current } from '~/services/open-weather';

export const mockCurrentWeather: Current = {
  dateTime: '21/1/1970',
  sunrise: '12:48',
  sunset: '12:49',
  temperature: '6°',
  temperatureFeelsLike: '4°',
  pressure: '1000 mb',
  humidity: '87%',
  dewPoint: '4°',
  ultravioletIndex: '0',
  cloudCover: '100%',
  visibility: '10000 m',
  windSpeed: '4 m/s',
  windGust: '11 m/s',
  windDirection: '130°',
  weather: [
    {
      main: 'Clouds',
      description: 'Overcast clouds',
      icon: {
        prefix: 'fas',
        iconName: 'cloud',
        icon: [
          576,
          512,
          ['9729'],
          'f0c2',
          'M0 336c0 79.5 64.5 144 144 144l304 0c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1-24.1-45.8-72.2-77.1-127.6-77.1-79.5 0-144 64.5-144 144 0 8 .7 15.9 1.9 23.5-56.9 19.2-97.9 73.1-97.9 136.5z',
        ],
      },
    },
  ],
  inversionProbability: '100',
};
