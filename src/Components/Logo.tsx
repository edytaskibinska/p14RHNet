import { FC } from "react";
import styled from "styled-components";

interface ILogoBasicStyle {
  id?: string;
}

const LogoStyled = styled.img<ILogoBasicStyle>`
  width: 50px;
  height: 50px;
`;

interface ILogo {
  src?: string;
  className?: string;
}

const Logo: FC<ILogo> = ({ src, className }) => {
  return <LogoStyled className={className} src={src} />;
};

export default Logo;
