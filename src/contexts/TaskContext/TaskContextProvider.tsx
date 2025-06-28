import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from '.';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWokerManager';
import { TaskActionTypes } from './taskAction';
import { loadBeep } from '../../utils/loadBeep';

// Context Provider & Props

type TaskContentProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContentProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const worker = TimerWorkerManager.getInstance();
  const playBeepRef = useRef<() => void | null>(null);

  worker.onmessage(e => {
    const countDownSeconds = e.data; // event.data here will be the value sent from the worker

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
      }

      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
      console.log('Worker stopped because there is no active task.');
    }

    worker.postMessage(state);
  }, [state, worker]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep(); //loads audio
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
