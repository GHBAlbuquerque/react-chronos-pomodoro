import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='Item'>
        Olá, mundo!
      </Heading>
      <h2>Teste</h2>
    </>
  );
}
