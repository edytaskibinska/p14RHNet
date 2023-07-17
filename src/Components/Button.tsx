import { FC, ReactNode, MouseEvent, ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../Data/Colors";

//Button component declaration
//S.O.L.I.D - SRP - Single Responsibility Principle
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
  border-color: ${colors.green};
  background-color: ${colors.green};
  color: ${colors.white};
  border-radius: 4px;
  transition-duration: 0.25s;
  border: none;
`;

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Button: FC<IButton> = ({
  children,
  className,
  onClick,
  ...restProps
}) => {
  return (
    <ButtonStyled onClick={onClick} className={className} {...restProps}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
