import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { initialTaskState } from './initialTaskState';
import { TaskActionTypes, type TaskActionModel } from './taskAction';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const tasks =
        state.tasks.length === 8 ? [newTask] : [...state.tasks, newTask];
      const secondsRemaining = newTask.duration * 60;
      const nextCycle = getNextCycle(state.currentCycle);
      const formattedSecondsRemaining = formatSecondsToMinutes(
        state.secondsRemaining,
      );

      return {
        ...state,
        tasks,
        secondsRemaining,
        formattedSecondsRemaining,
        activeTask: newTask,
        currentCycle: nextCycle,
        config: { ...state.config },
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (state.activeTask?.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        activeTask: null,
      };
    }

    case TaskActionTypes.RESET_STATE: {
      return { ...initialTaskState };
    }

    case TaskActionTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemaining,
        ),
      };
    }

    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (state.activeTask?.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        activeTask: null,
      };
    }

    case TaskActionTypes.CHANGE_SETTINGS: {
      return {
        ...state,
        config: { ...action.payload },
      };
    }
  }

  return state;
}
