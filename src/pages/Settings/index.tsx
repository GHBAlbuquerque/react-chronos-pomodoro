import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center', fontSize: '1.4rem' }}>
          Modifique as configurações para tempo de foco, descanso curso e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput id='workTime' labelText='Focus'></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Short break'
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Long break'
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
