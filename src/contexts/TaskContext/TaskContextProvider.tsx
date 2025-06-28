import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from '.';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWokerManager';

// Context Provider & Props

type TaskContentProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContentProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data; // event.data here will be the value sent from the worker
    console.log(countDownSeconds); // This will log countDownSeconds

    if (countDownSeconds == 0) {
      console.log('Work completed! :-)');
      worker.terminate();
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
      console.log('Worker stopped because there is no active task.');
    }

    worker.postMessage(state);
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
