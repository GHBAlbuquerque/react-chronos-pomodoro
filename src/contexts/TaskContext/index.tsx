import { createContext } from 'react';
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
  return (
    <TaskContext.Provider value={initialContextValue}>
      {children}
    </TaskContext.Provider>
  );
}
