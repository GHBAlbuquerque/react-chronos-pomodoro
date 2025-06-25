import { Container } from './components/Container';
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { Logo } from './components/Logo';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>MENU</Container>
      <Container>FORM</Container>
      <Container>FOOTER</Container>
    </>
  );
}
