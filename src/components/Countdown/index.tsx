import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export function Countdown() {
  const taskContext = useTaskContext();
  console.log(taskContext);
  return <div className={styles.countdown}>00:00</div>;
}
