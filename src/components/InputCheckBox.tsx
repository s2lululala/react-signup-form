import './InputCheckBox.css';

type InputCheckBoxProps = {
  id: string;
  checked: boolean;
  onChange: (e : React.FormEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
}

const InputCheckBox = ({id, checked, onChange, label, required}: InputCheckBoxProps) => {
  return (
    <div className='inputCheckBox'>
      <input
        className='inputCheckBox__input'
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        />
      <label htmlFor={id} className={required ? 'inputCheckBox__title inputCheckBox__title__required' : 'inputCheckBox__title'}>
        {label}{required && '*'}
      </label>
    </div>
  )
}

export default InputCheckBox;