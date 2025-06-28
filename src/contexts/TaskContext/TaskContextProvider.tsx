import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from '.';
import { taskReducer } from './taskReducer';

// Context Provider & Props

type TaskContentProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContentProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
