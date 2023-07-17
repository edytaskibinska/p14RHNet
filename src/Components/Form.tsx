import { FC, ReactNode, FormEvent, FormHTMLAttributes } from "react";
import styled from "styled-components";
interface IFormBasicStyle {
  id?: string;
}

//S.O.L.I.D - SRP - Single Responsibility Principle
//Form component declaration
const FormStyled = styled.form<IFormBasicStyle>`
  padding: 20px;
`;

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  id?: string;
  children?: ReactNode;
  className?: string;
  onSubmit?: (e: FormEvent) => void;
}

const Form: FC<IForm> = ({
  id,
  children,
  className,
  onSubmit,
  ...restProps
}) => {
  return (
    <FormStyled
      id={id}
      className={className}
      onSubmit={onSubmit} //S.O.L.I.D - DIP - Dependency Inversion principle
      {...restProps}
    >
      {children}
    </FormStyled>
  );
};

export default Form;
