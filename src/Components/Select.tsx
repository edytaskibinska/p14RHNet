import { FC, ChangeEventHandler, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../Data/Colors";

//S.O.L.I.D - SRP - Single Responsibility Principle
//Select component declaration
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
    border: 1px solid ${colors.greenSecondarySage};
    border-radius: 5px;
    padding: 5px;
    font-size: 1rem;
  }
`;

interface IOption {
  name: string;
}

interface ISelectCustom extends InputHTMLAttributes<HTMLSelectElement> {
  id?: string;
  name?: string;
  label?: string;
  options?: IOption[] | undefined;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  className?: string;
}

const Select: FC<ISelectCustom> = ({
  id,
  name,
  label,
  options,
  onChange,
  className,
  ...restProps
}) => {
  return (
    <SelectCustomStyled id={id} className={className}>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        onChange={onChange}
        {...restProps} //S.O.L.I.D - LS-  Liskov Substitution
      >
        {options &&
          options.map((option: IOption, index: number) => {
            return <option key={index}>{option?.name}</option>;
          })}
      </select>
    </SelectCustomStyled>
  );
};

export default Select;
