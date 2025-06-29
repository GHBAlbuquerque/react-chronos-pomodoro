import { toast } from 'react-toastify';
import { DialogueButton } from '../components/DialogueButton';

export function showConfirmationBox(
  data: string,
  onClosing: (confirmation: boolean) => void,
) {
  return toast(DialogueButton, {
    data: data,
    autoClose: false,
    closeOnClick: false,
    closeButton: false,
    draggable: false,
    onClose: confirmation => {
      if (!confirmation) return onClosing(false);
      onClosing(true);
    },
  });
}
