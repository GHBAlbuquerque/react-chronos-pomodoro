import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionTypes, type TaskActionModel } from './taskAction';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const secondsRemaining = newTask.duration * 60;
      const nextCycle = getNextCycle(state.currentCycle);
      const formattedSecondsRemaining = formatSecondsToMinutes(
        state.secondsRemaining,
      );

      return {
        ...state,
        tasks: [...state.tasks, newTask],
        secondsRemaining,
        formattedSecondsRemaining, // ---- TODO ----
        activeTask: newTask,
        currentCycle: nextCycle,
        config: { ...state.config },
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }

    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }

  return state;
}
