import type { TaskStateModel } from '../../models/TaskStateModel';

type TipsProps = {
  state: TaskStateModel;
  nextCycleType: keyof TaskStateModel['config'];
};

export function Tips({ state, nextCycleType }: TipsProps) {
  const messageActiveTask = {
    workTime: (
      <span>
        This cycle lasts {state.config.workTime} minute(s). <b>Focus.</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        <b>Take a break!</b> Rest for {state.config.shortBreakTime} minute(s).
      </span>
    ),
    longBreakTime: (
      <span>
        <b>Great Work!</b> Now rest for {state.config.longBreakTime} minute(s).
      </span>
    ),
  };

  const messageInactiveTask = {
    workTime: <span>The next cycle is {state.config.workTime} minute(s).</span>,
    shortBreakTime: (
      <span>
        In the next cycle you'll rest for {state.config.shortBreakTime}{' '}
        minute(s).
      </span>
    ),
    longBreakTime: (
      <span>Soon you'll rest for {state.config.longBreakTime} minute(s).</span>
    ),
  };

  return (
    <>
      {!!state.activeTask && messageActiveTask[state.activeTask?.type]}
      {!state.activeTask && messageInactiveTask[nextCycleType]}
    </>
  );
}
