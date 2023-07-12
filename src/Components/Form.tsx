import { FC, ReactNode } from "react";
import styled from "styled-components";
interface IFormBasicStyle {
  id?: string;
}

const FormStyled = styled.form<IFormBasicStyle>``;

interface IForm {
  id?: string;
  children?: ReactNode;
  className?: string;
}

const Form: FC<IForm> = ({ id, children, className }) => {
  return (
    <FormStyled id={id} className={className}>
      {children}
    </FormStyled>
  );
};

export default Form;
