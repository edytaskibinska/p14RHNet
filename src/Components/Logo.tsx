import { FC } from "react";
import styled from "styled-components";

//S.O.L.I.D - SRP - Single Responsibility Principle
//Logo component declaration
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
  return (
    <LogoStyled
      className={className}
      src={src} //S.O.L.I.D - ISP - Interface Segregation principle
    />
  );
};

export default Logo;
