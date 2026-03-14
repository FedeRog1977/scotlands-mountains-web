'use client';

import { FC } from 'react';
import { Header } from '~/components/core/header';
import { OSMap } from './components/os-map.jsx';

export type ConquestTemplateProps = {
  mapUrl: string;
  appVersion: string;
};

export const ConquestTemplate: FC<ConquestTemplateProps> = ({ mapUrl, appVersion }) => (
  <>
    <Header variant="layered" appVersion={appVersion} />

    <OSMap mapUrl={mapUrl} />
  </>
);
