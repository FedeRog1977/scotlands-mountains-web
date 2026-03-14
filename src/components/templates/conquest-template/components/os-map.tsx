/* eslint-disable react/jsx-filename-extension */

'use client';

import dynamic from 'next/dynamic.js';
import { FC } from 'react';

type OSMapProps = {
  mapUrl: string;
};

/**
 * Requirement for this dynamic export: https://github.com/PaulLeCam/react-leaflet/issues/956
 * Props passing: https://stackoverflow.com/questions/70297328/passing-props-to-dynamic-component-in-nextjs
 */
// @ts-expect-error: False `dynamic` error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const OSMap: FC<OSMapProps> = dynamic(async () => import('./os-map-component.jsx'), {
  ssr: false,
});

export { OSMap };
