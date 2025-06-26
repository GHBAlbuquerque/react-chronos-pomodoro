import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../Button';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { useRef, useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(taskName, taskNameInput.current.value);
  }

  return (
    <form onSubmit={handleCreateTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='input'
          labelText='task'
          placeholder='Write a task'
          // value={taskName}
          // onChange={e => setTaskName(e.target.value)}
          ref={taskNameInput}
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
