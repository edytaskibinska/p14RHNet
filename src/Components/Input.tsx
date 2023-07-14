import { FC, ChangeEvent, useState } from "react";
import styled from "styled-components";
import { colors } from "../Data/Colors";

export const InputBasic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  label {
    font-weight: bold;
  }
  input {
    border: 1px solid #8ca1a5;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.2rem;
    width: 100%;
  }
  .errorMsg {
    color: ${colors.red};
    font-size: 10px;
  }
`;

interface IInput {
  id: string;
  forId: string;
  label: string;
  type: string;
  className?: string;
  value?: string | number;
  placeholder?: string;
  required?: boolean;
  inputClassName?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInput> = ({
  id,
  forId,
  label,
  type,
  className,
  value,
  placeholder,
  inputClassName,
  required,
  onChange,
}) => {
  //TODO gestion d'erreurs
  const [inputValid] = useState(true);
  return (
    <InputBasic id={id} className={className}>
      <label htmlFor={forId}>{label}</label>
      <input
        type={type}
        id={forId}
        required={required}
        value={value}
        placeholder={placeholder}
        className={inputClassName}
        onChange={onChange}
      />
      {!inputValid && <div className="errorMsg">Error</div>}
    </InputBasic>
  );
};

export default Input;
