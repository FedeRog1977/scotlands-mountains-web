import 'proj4leaflet';
import { LatLngBoundsExpression, Proj } from 'leaflet';
import { CSSProperties } from 'react';
import { MapContainerProps as MapContainerBaseProps } from 'react-leaflet';
import { projectCoordinates } from './project-coordinates.js';

type Styles = {
  style: CSSProperties;
};

type MapContainerProps = Styles & MapContainerBaseProps;

/**
 * Requirement for inline styles: https://stackoverflow.com/questions/40365440/react-leaflet-map-not-correctly-displayed
 */
export const getMapContainerProps = (isEPSG27700: boolean): MapContainerProps => ({
  crs: isEPSG27700
    ? new Proj.CRS(
        'EPSG:27700',
        `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717
        +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,
        -125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs`,
        {
          resolutions: [896.0, 448.0, 224.0, 112.0, 56.0, 28.0, 14.0, 7.0, 3.5, 1.75],
          origin: [-238375, 1376256],
        },
      )
    : undefined,
  center: isEPSG27700
    ? projectCoordinates('EPSG:27700', 'EPSG:4326', [205685, 755842])
    : [56.6539, -5.1715],
  zoom: 2,
  minZoom: 0,
  maxZoom: 9,
  maxBounds: isEPSG27700
    ? // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      ([
        projectCoordinates('EPSG:27700', 'EPSG:4326', [-238375, 0]),
        projectCoordinates('EPSG:27700', 'EPSG:4326', [900000, 1376256]),
      ] as LatLngBoundsExpression)
    : undefined,
  style: { height: '100vh', width: '100vw' },
});
