import { FC, ReactNode } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

interface IHeader {
  children?: ReactNode;
}

const Header: FC<IHeader> = ({ children }) => {
  return <HeaderStyled className="header">{children}</HeaderStyled>;
};

export default Header;
