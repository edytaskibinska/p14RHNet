import { FC, ReactNode } from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  color: #ccc;
  padding: 2rem 0 1.5rem;
  .footerText {
    margin: 0;
    padding: 0;
  }
`;

interface IFooter {
  children?: ReactNode;
}

const Footer: FC<IFooter> = ({ children }) => {
  return (
    <FooterStyled className="footer">
      <p className="footerText">{children}</p>
    </FooterStyled>
  );
};

export default Footer;
