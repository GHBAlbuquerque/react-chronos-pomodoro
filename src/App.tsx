import { Container } from './components/Container';
//import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/Countdown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              type='text'
              id='input'
              labelText='task'
              placeholder='Write a task'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <button>enviar</button>
          </div>
        </form>
      </Container>

      <Container>FOOTER</Container>
    </>
  );
}
