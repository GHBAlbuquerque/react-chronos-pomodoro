import { createContext, useContext, useState } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';

// Initial value for TaskState

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

// Type Props & initial Props for Context

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

// Context creation

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

// Context Provider & Props

type TaskContentProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContentProviderProps) {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

// Personalized Hook

export function useTaskContext() {
  return useContext(TaskContext);
}
