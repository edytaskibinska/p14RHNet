import { FC, ReactNode } from "react";
import styled from "styled-components";

//S.O.L.I.D - SRP - Single Responsibility Principle
//Title component declarations
interface ITitleBasicStyle {
  id?: string;
  color?: string
}

const TitleStyled = styled.h1<ITitleBasicStyle>`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: ${props => props?.color}
`;

interface ITitle {
  id?: string;
  color?: string;
  children?: ReactNode;
  className?: string;
}

const Title: FC<ITitle> = ({ id, color, children, className }) => {
  return (
    <TitleStyled id={id} color={color} className={className}>
      {children}
    </TitleStyled>
  );
};

export default Title;
