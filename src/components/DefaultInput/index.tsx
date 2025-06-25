import styles from './styles.module.css';

type DefaultInputProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ labelText, id, ...props }: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} {...props}></input>
    </>
  );
}
