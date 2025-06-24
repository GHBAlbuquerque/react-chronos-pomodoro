import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading attr='property'>
        Olá, mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, similique
        corporis quaerat natus culpa est veniam repellendus reiciendis alias.
        Quo unde architecto optio quos magni atque necessitatibus, est aliquam
        voluptate.
      </p>
    </>
  );
}
