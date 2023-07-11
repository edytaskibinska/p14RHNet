import { FC, ReactNode, MouseEvent } from "react";
import styled from "styled-components";
import { Button } from "./index";
interface IFormBasicStyle {
  id?: string;
}

const FormStyled = styled.form<IFormBasicStyle>``;

interface IForm {
  id?: string;
  children?: ReactNode;
  className?: string;
  submitHandler?: (event: MouseEvent<HTMLElement>) => void;
}

const Form: FC<IForm> = ({ id, children, className, submitHandler }) => {
  return (
    <FormStyled id={id} className={className}>
      {children}
      <Button onClick={submitHandler}>Save</Button>
    </FormStyled>
  );
};

export default Form;
