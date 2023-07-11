import { FC, ReactNode, MouseEvent } from "react";
import styled from "styled-components";

interface IButtonBasicStyle {
  id?: string;
}

const ButtonStyled = styled.button<IButtonBasicStyle>`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: rgb(0, 188, 119);
  background-color: rgb(0, 188, 119);
  color: rgb(255, 255, 255);
`;

interface IButton {
  children?: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Button: FC<IButton> = ({ children, className, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} className={className}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
