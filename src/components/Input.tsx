type InputProps = {
  type: string;
  id: string;
  value: any;
  onChange: any;
}

const Input = ({type, id, value, onChange}: InputProps) => {
  return (
    <>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        />
    </>
  )
}

export default Input;