import '~/components/reset';
import { FC, ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/OrdnanceSurvey/os-api-branding@0.3.1/os-api-branding.css"
      />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" />
      <script src="https://cdn.jsdelivr.net/gh/OrdnanceSurvey/os-api-branding@0.3.1/os-api-branding.js" />
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.7.0/proj4.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4leaflet/1.0.2/proj4leaflet.min.js"></script> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/@mapbox/togeojson@0.16.0/togeojson.min.js"></script> */}
    </head>
    <body>{children}</body>
  </html>
);

export default Layout;
