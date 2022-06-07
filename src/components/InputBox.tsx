type InputBoxProps = {
  id: string;
  checked: boolean;
  onChange: any;
}

const InputBox = ({id, checked, onChange}: InputBoxProps) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        />
    </>
  )
}

export default InputBox;