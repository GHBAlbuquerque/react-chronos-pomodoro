import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useRef } from 'react';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  const formErrors: string[] = [];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Please use only numbers.');
    }

    if (workTime < 1 || workTime > 60) {
      formErrors.push('Use values between 1 and 60 for focus');
    }

    if (shortBreakTime < 1 || shortBreakTime > 15) {
      formErrors.push('Use values between 1 and 15 for short rest');
    }

    if (longBreakTime < 1 || longBreakTime > 30) {
      formErrors.push('Use values between 1 and 30 for long rest');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => showMessage.error(error));
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });

    showMessage.success('Settings saved');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center', fontSize: '1.4rem' }}>
          Modify settings for focus, short rest and long rest in <b>minutes</b>.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSubmit} action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Focus'
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type='number'
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Short break'
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type='number'
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Long break'
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
              type='number'
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Save configs'
              title='Save configs'
            ></DefaultButton>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
