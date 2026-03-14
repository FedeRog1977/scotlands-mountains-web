import { Metadata } from 'next';
import { redirect } from 'next/navigation.js';
import { ReactElement } from 'react';
import { ConquestTemplate } from '~/components/templates';
import { facade } from '~/facade';

type SearchParams = {
  query: string;
};

export type ConquestProps = {
  searchParams: Promise<SearchParams>;
};

export const generateMetadata = (): Metadata => ({
  title: "Scotland's Mountains | Conquest Map",
  description: "Scotland's Mountains Conquest Map Page",
  keywords: ['scotlands', 'mountains', 'conquest', 'map', 'ordnance', 'survey'],
});

const Conquest = async ({ searchParams }: ConquestProps): Promise<ReactElement> => {
  const params = await searchParams;

  if (params.query) {
    redirect(params.query);
  }

  const mapUrl = facade.getMap('Leisure_27700');

  return <ConquestTemplate mapUrl={mapUrl} appVersion={process.env.APP_VERSION} />;
};

export default Conquest;
