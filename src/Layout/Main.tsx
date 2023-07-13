import { FC, ReactNode } from "react";

import styled from "styled-components";

const MainStyled = styled.main`
  flex: 1;
  max-width: 1400px;
  border: 1px solid red;
  margin: 0 auto;
`;

interface IMain {
  children?: ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
  return <MainStyled className="main">{children}</MainStyled>;
};

export default Main;
