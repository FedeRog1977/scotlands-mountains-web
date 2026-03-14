'use client';

import { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { osAttribution } from '../constants/os-attribution.js';
import { getMapContainerProps } from '../utils/get-map-container-props.js';

type OSMapComponentProps = {
  mapUrl: string;
};

const OSMapComponent: FC<OSMapComponentProps> = ({ mapUrl }) => {
  const isEPSG27700 = mapUrl.includes('Leisure_27700');
  const mapContainerProps = getMapContainerProps(isEPSG27700);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MapContainer {...mapContainerProps}>
      <TileLayer url={mapUrl} attribution={osAttribution} />
    </MapContainer>
  );
};

export default OSMapComponent;
