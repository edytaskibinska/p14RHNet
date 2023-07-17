import { FC, ChangeEvent, useState, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../Data/Colors";

//S.O.L.I.D - SRP - Single Responsibility Principle
//Input component declaration
export const InputBasic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  transition: 0.25s all;
  label {
    font-weight: bold;
  }
  &:focus-within {
    input {
      transition: 0.25s all;
      box-shadow: 0 6px 16px rgba(101, 101, 101, 0.07),
        0 17px 21px rgba(21, 21, 21, 0.2);
    }
  }
  input {
    border: 1px solid ${colors.greenSecondarySage};
    border-radius: 4px;
    padding: 8px;
    font-size: 1rem;
    width: 100%;
    transition: 0.25s all;
    &::placeholder {
      opacity: 0.5;
      font-size: 0.9rem;
    }
    &[type="date"]:invalid::-webkit-datetime-edit {
      opacity: 0.5;
      font-size: 0.9rem;
    }
    &:focus {
      transition: 0.25s all;
      background: ${colors.greenSecondaryLime};
      color: ${colors.black};
    }
  }
  .errorMsg {
    background-color: ${colors.red};
  }
`;

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
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
  ...restProps
}) => {
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
        {...restProps} //S.O.L.I.D - LS-  Liskov Substitution
      />
      {!inputValid && <div className="errorMsg">Error</div>}
    </InputBasic>
  );
};

export default Input;
