import { LatLngExpression, LatLngTuple } from 'leaflet';
import proj4 from 'proj4';

// More options are available
type Options = '27700' | '4326';

type ToFrom = `EPSG:${Options}`;

type ProjectCoordinates = LatLngExpression | LatLngTuple;

export const projectCoordinates = (
  to: ToFrom,
  from: ToFrom,
  coordinates: number[],
): ProjectCoordinates => {
  proj4.defs(
    'EPSG:27700',
    `+proj=tmerc
        +lat_0=49
        +lon_0=-2
        +k=0.9996012717
        +x_0=400000
        +y_0=-100000
        +ellps=airy
        +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489
        +units=m
        +no_defs`,
  );

  const projectedCoordinates = proj4(to, from, coordinates).reverse();

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return projectedCoordinates as ProjectCoordinates;
};
