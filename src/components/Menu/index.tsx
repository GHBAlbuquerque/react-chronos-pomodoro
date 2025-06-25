import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableModes = 'dark' | 'light';

export function Menu() {
  const [mode, changeMode] = useState<AvailableModes>('dark');

  function handleModeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    changeMode(prevMode => {
      const nextMode = prevMode === 'dark' ? 'light' : 'dark';
      return nextMode;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);

    return () => {
      console.log(
        'this is only executed after useEffcect has been called more than once',
      );
    };
  }, [mode]);

  return (
    <div className={styles.menu}>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Homepage'
        title='Homepage'
      >
        <HouseIcon />
      </a>

      <a
        href='#'
        className={styles.menuLink}
        aria-label='History'
        title='History'
      >
        <HistoryIcon />
      </a>

      <a
        href='#'
        className={styles.menuLink}
        aria-label='Settings'
        title='Settings'
      >
        <SettingsIcon />
      </a>

      <a
        href='#'
        className={styles.menuLink}
        aria-label='Change mode'
        title='Change mode'
        onClick={handleModeChange}
      >
        <SunIcon />
      </a>
    </div>
  );
}
