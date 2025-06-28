import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultButton } from '../Button';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Please write a task name');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({
      type: TaskActionTypes.INTERRUPT_TASK,
    });
  }

  return (
    <form onSubmit={handleCreateTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='input'
          labelText='task'
          placeholder='Write a task'
          maxLength={30}
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            type='submit'
            icon={<PlayCircleIcon />}
            color='green'
            aria-label='Initiate task'
            title='Initiate task'
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            type='button'
            icon={<StopCircleIcon />}
            color='red'
            aria-label='Interrupt task'
            title='Interrupt task'
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
