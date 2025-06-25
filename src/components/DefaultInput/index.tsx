type DefaultInputProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ labelText, id, ...rest }: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} {...rest}></input>
    </>
  );
}
