import { FC, ReactNode, ChangeEvent } from "react";
import styled from "styled-components";

interface ISelectCustomBasicStyle {
  id?: string;
}

const SelectCustomStyled = styled.div<ISelectCustomBasicStyle>``;

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
