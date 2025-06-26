import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../Button';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '21:00',
      };
    });
  }

  return (
    <form className='form' action=''>
      <button type='button' onClick={handleClick}>
        Clicar
      </button>
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
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
