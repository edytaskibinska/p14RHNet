import { FC, ChangeEvent, LegacyRef } from "react";
import styled from "styled-components";

export const InputBasic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    font-weight: bold;
  }
  input {
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.2rem;
  }
  .errorMsg {
    color: red;
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
  refErrorObject?: LegacyRef<HTMLDivElement>;
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
  refErrorObject,
  onChange,
}) => {
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
      <div ref={refErrorObject} className="errorMsg">Error</div>
    </InputBasic>
  );
};

export default Input;
