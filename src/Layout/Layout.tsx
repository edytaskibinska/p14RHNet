import { FC, ReactNode } from "react";
import styled from "styled-components";

import { Header, Footer, Nav, Main } from "./index";
import logo from "../Assets/logo.jpg";
import { Logo } from "../Components";

//S.O.L.I.D - SRP - Single Responsibility Principle
//Layout component declaration
interface ILayout {
  content?: ReactNode;
}

const LayoutStyled = styled.div`
  * {
    box-sizing: border-box;
  }
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .main {
    flex-grow: 1;
  }
`;

const Layout: FC<ILayout> = ({ content }) => {
  return (
    <LayoutStyled className="layout">
      <Header>
        <Logo src={logo} />
        <Nav></Nav>
      </Header>
      <Main>{content}</Main>
      <Footer>Copyright 2023</Footer>
    </LayoutStyled>
  );
};

export default Layout;
