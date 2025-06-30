import { TrashIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { RouterLink } from '../../components/RouterLink';
import { GenericHtml } from '../../components/GenericHtml';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';
import { useEffect, useState } from 'react';
import { showConfirmationBox } from '../../adapters/showConfirmationBox';
import { showMessage } from '../../adapters/showMessage';

export function History() {
  useEffect(() => {
    document.title = 'History - Chronos Pomodoro';
  }, []);

  const { state, dispatch } = useTaskContext();
  const taskTypeDictionary = {
    workTime: 'Focus',
    shortBreakTime: 'Short Break',
    longBreakTime: 'Long Break',
  };
  const hasTasks = state.tasks.length > 0;
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  function handleTasksSorting({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTasksOptions({
      tasks: sortTasks({
        tasks: sortTasksOptions.tasks,
        field: field,
        direction: newDirection,
      }),
      field: field,
      direction: newDirection,
    });
  }

  function handleResetHistory() {
    showConfirmationBox(
      'Are you sure you want to erase task history completely?',
      confirmation => {
        if (confirmation) {
          dispatch({ type: TaskActionTypes.RESET_STATE });
        }
      },
    );
  }

  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };
  }, []);

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color='red'
                aria-label='Purge history'
                title='Purge history'
                onClick={handleResetHistory}
              />
            </span>
          )}
        </Heading>
      </Container>

      <Container>
        {!hasTasks && (
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

        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    className={styles.thSort}
                    onClick={() => handleTasksSorting({ field: 'name' })}
                  >
                    Task ↕
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleTasksSorting({ field: 'duration' })}
                  >
                    Duration ↕
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleTasksSorting({ field: 'startDate' })}
                  >
                    Date ↕
                  </th>
                  <th>Status</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {sortTasksOptions.tasks.map(task => {
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
