import { TrashIcon } from 'lucide-react';
import { DefaultButton } from '../../components/Button';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { RouterLink } from '../../components/RouterLink';
import { GenericHtml } from '../../components/GenericHtml';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks } from '../../utils/sortTasks';

export function History() {
  const { state } = useTaskContext();
  const taskTypeDictionary = {
    workTime: 'Focus',
    shortBreakTime: 'Short Break',
    longBreakTime: 'Long Break',
  };
  const sortedTasks = sortTasks({ tasks: state.tasks });

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color='red'
              aria-label='Purge history'
              title='Purge history'
            />
          </span>
        </Heading>
      </Container>

      <Container>
        {state.tasks.length == 0 && (
          <GenericHtml>
            <span>Nothing to show here. </span>
            <span>
              How about starting{' '}
              <b>
                <RouterLink href='/'>a new task</RouterLink>?
              </b>
            </span>
          </GenericHtml>
        )}

        {state.tasks.length != 0 && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortedTasks.map(task => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} minute(s)</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </MainTemplate>
  );
}
