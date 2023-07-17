import { FC, ReactNode } from "react";
import styled from "styled-components";

//S.O.L.I.D - SRP - Single Responsibility Principle
//Main content component declaration
const MainStyled = styled.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
`;

interface IMain {
  children?: ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
  return <MainStyled className="main">{children}</MainStyled>;
};

export default Main;
