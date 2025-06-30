import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useRef } from 'react';
import { showMessage } from '../../adapters/showMessage';

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortRestTimeInputRef = useRef<HTMLInputElement>(null);
  const longRestTimeInputRef = useRef<HTMLInputElement>(null);

  const formErrors: string[] = [];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const workTimeValue = Number(workTimeInputRef.current?.value);
    const shortRestTimeValue = Number(shortRestTimeInputRef.current?.value);
    const longRestTimeValue = Number(longRestTimeInputRef.current?.value);

    if (
      isNaN(workTimeValue) ||
      isNaN(shortRestTimeValue) ||
      isNaN(longRestTimeValue)
    ) {
      formErrors.push('Please use only numbers.');
    }

    if (workTimeValue < 1 || workTimeValue > 60) {
      formErrors.push('Use values between 1 and 60 for focus');
    }

    if (shortRestTimeValue < 1 || shortRestTimeValue > 15) {
      formErrors.push('Use values between 1 and 15 for short rest');

      if (longRestTimeValue < 1 || longRestTimeValue > 30) {
        formErrors.push('Use values between 1 and 30 for long rest');
      }

      if (formErrors.length > 0) {
        formErrors.forEach(error => showMessage.error(error));
      }
    }
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
              ref={shortRestTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type='number'
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Long break'
              ref={longRestTimeInputRef}
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
