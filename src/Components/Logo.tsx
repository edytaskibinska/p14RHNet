import { FC } from "react";
import styled from "styled-components";

interface ILogoBasicStyle {
  id?: string;
}

const LogoStyled = styled.img<ILogoBasicStyle>`
  width: 120px;
  height: 120px;
`;

interface ILogo {
  src?: string;
  className?: string;
}

const Logo: FC<ILogo> = ({ src, className }) => {
  return <LogoStyled className={className} src={src} />;
};

export default Logo;
