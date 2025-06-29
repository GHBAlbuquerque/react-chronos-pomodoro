import { useContext } from 'react';
import { TaskContext } from '.';

// Personalized Hook

export function useTaskContext() {
  return useContext(TaskContext);
}
