import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <a href='#' className={styles.menuLink}>
        <HouseIcon />
      </a>

      <a href='#' className={styles.menuLink}>
        <HistoryIcon />
      </a>

      <a href='#' className={styles.menuLink}>
        <SettingsIcon />
      </a>

      <a href='#' className={styles.menuLink}>
        <SunIcon />
      </a>
    </div>
  );
}
