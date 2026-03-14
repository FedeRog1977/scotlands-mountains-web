import { FC } from 'react';

export const Footer: FC = () => (
  <footer
    style={{
      display: 'flex',
      flexShrink: 0,
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: '2000',
      height: '8vh',
      width: '100vw',
      backdropFilter: 'saturate(180%) blur(10px)',
    }}
  >
    <div
      style={{
        fontSize: '36px',
        marginLeft: '36px',
      }}
    >
      Scotland&rsquo;s Mountains
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: '20px',
        fontSize: '20px',
        marginRight: '36px',
      }}
    >
      <a href="/">Home</a>
      <a href="/conquest">Conquest</a>
      <a href="/weather">Weather</a>
      <a href="/districts">Districts</a>
      <a href="/regions">Regions</a>
      <a href="/landmasses">Landmasses</a>
      <a href="/hills">Hills</a>
      <a href="/gear">Gear</a>
    </div>
  </footer>
);
