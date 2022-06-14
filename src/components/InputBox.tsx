import './InputBox.css';

type InputBoxProps = {
  type: string;
  id: string;
  value: string;
  onChange: (e : React.FormEvent<HTMLInputElement>) => void;
  label: string;
  required: boolean;
}

const InputBox = ({type, id, value, onChange, label, required}: InputBoxProps) => {
  return (
    <div className='inputBox'>
      <div className={required ? 'inputBox__title inputBox__title__required' : 'inputBox__title'}>
        {label}{required && '*'}
      </div>
      <input
        className='inputBox__input'
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        />
    </div>
  )
}

export default InputBox;