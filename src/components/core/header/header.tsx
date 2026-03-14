import { FC } from 'react';

type HeaderProps = {
  variant?: 'basic' | 'layered';
  appVersion: string;
};

export const Header: FC<HeaderProps> = ({ variant = 'basic', appVersion }) => {
  const isBasic = variant === 'basic';

  return (
    <header
      style={{
        display: 'flex',
        flexShrink: isBasic ? 0 : undefined, // For everything else, only
        justifyContent: 'space-between',
        alignItems: 'center',
        position: isBasic ? undefined : 'absolute', // For Conquest, only
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
        Scotland&rsquo;s Mountains v{appVersion}
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
    </header>
  );
};
