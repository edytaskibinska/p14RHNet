import { FC } from "react";
import styled from "styled-components";

interface ISelectCustomBasicStyle {
  id?: string;
}

const SelectCustomStyled = styled.div<ISelectCustomBasicStyle>`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    font-weight: bold;
    text-align: left;
  }
  select {
    border: 1px solid #8CA1A5;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.2rem;
  }
`;

interface ISelectCustom {
  id?: string;
  name?: string;
  label?: string;
  options?: any;
  onChange?: (e: any) => void;
  className?: string;
}

const Select: FC<ISelectCustom> = ({
  id,
  name,
  label,
  options,
  onChange,
  className,
}) => {
  return (
    <SelectCustomStyled id={id} className={className}>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange}>
        {options.map((option: any, index: any) => {
          return <option key={index}>{option?.name}</option>;
        })}
      </select>
    </SelectCustomStyled>
  );
};

export default Select;
