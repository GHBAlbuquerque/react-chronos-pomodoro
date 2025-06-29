import type { ToastContentProps } from 'react-toastify';
import { ThumbsUpIcon, ThumbsDownIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';

import styles from './styles.module.css';

export function DialogueButton({
  closeToast,
  data,
}: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            aria-label='Confirm and close'
            title='Confirm and close'
          />
          <DefaultButton
            onClick={() => closeToast(false)}
            icon={<ThumbsDownIcon />}
            color='red'
            aria-label='Cancel and close'
            title='Cancel and close'
          />
        </div>
      </div>
    </>
  );
}
