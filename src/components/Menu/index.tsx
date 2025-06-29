import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

type AvailableModes = 'dark' | 'light';

export function Menu() {
  const [mode, changeMode] = useState<AvailableModes>(() => {
    const storageMode =
      (localStorage.getItem('mode') as AvailableModes) || 'dark';
    return storageMode;
  });

  function handleModeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    changeMode(prevMode => {
      const nextMode = prevMode === 'dark' ? 'light' : 'dark';
      return nextMode;
    });
  }

  const nextModeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('mode', mode);

    // return () => {
    //   console.log(
    //   'this is only executed after useEffect has been called more than once, it can be used to clean up ',
    //   );
    // };
  }, [mode]);

  return (
    <div className={styles.menu}>
      <Link
        to='/'
        className={styles.menuLink}
        aria-label='Homepage'
        title='Homepage'
      >
        <HouseIcon />
      </Link>

      <Link
        to='#'
        className={styles.menuLink}
        aria-label='History'
        title='History'
      >
        <HistoryIcon />
      </Link>

      <Link
        to='#'
        className={styles.menuLink}
        aria-label='Settings'
        title='Settings'
      >
        <SettingsIcon />
      </Link>

      <Link
        to='/'
        className={styles.menuLink}
        aria-label='Change mode'
        title='Change mode'
        onClick={handleModeChange}
      >
        {nextModeIcon[mode]}
      </Link>
    </div>
  );
}
