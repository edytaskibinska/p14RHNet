import { FC, ReactNode } from "react";
import styled from "styled-components";
interface ITitleBasicStyle {
  id?: string;
  color?: string
}

//Title component declaration
const TitleStyled = styled.h1<ITitleBasicStyle>`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: ${props => props.color}
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
