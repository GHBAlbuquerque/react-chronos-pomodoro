import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Link } from 'react-router';

export function Logo() {
  return (
    <div className={styles.logo}>
      <Link to='#' className={styles.logoLink}>
        <TimerIcon />
        <span>Chronos</span>
      </Link>
    </div>
  );
}
