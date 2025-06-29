import type { TaskStateModel } from '../../models/TaskStateModel';

type TipsProps = {
  state: TaskStateModel;
  nextCycleType: keyof TaskStateModel['config'];
};

export function Tips({ state, nextCycleType }: TipsProps) {
  const messageActiveTask = {
    workTime: (
      <span>
        This cycle lasts {state.config.workTime} minutes. <b>Focus.</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        <b>Take a break!</b> Rest for {state.config.shortBreakTime} minutes.
      </span>
    ),
    longBreakTime: (
      <span>
        <b>Great Work!</b> Now rest for {state.config.longBreakTime} minutes.
      </span>
    ),
  };

  const messageInactiveTask = {
    workTime: <span>The next cycle is {state.config.workTime} minutes.</span>,
    shortBreakTime: (
      <span>
        In the next cycle you'll rest for {state.config.shortBreakTime} minutes.
      </span>
    ),
    longBreakTime: (
      <span>Soon you'll rest for {state.config.longBreakTime} minutes.</span>
    ),
  };

  return (
    <>
      {!!state.activeTask && messageActiveTask[state.activeTask?.type]}
      {!state.activeTask && messageInactiveTask[nextCycleType]}
    </>
  );
}
