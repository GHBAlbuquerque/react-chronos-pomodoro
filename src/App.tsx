import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading attr={123} attr2='Item'>
        Olá, mundo!
      </Heading>
      <h2>Teste</h2>
    </>
  );
}
