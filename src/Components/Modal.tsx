import { FC, ReactNode, MouseEvent } from "react";
import styled from "styled-components";
import { colors } from "../Data/Colors";
import CloseIcon from "../Assets/CloseIcon";

interface IModalBasicStyle {
  id?: string;
}

const ModalOverlay = styled.div<IModalBasicStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBlock = styled.div`
  background-color: ${colors.white};
  max-width: 500px;
  border-radius: 10px;
  padding: 40px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

const ModalClose = styled.button`
  background-color: transparent;
  width: 24px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: -5px;
  right: 2px;
  color: white;
  border: 0px solid transparent;
`;
interface IButtonBasicStyle {
  id?: string;
}

const ButtonStyled = styled.button<IButtonBasicStyle>`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: ${colors.green};
  background-color: ${colors.green};
  color: ${colors.white};
`;

interface IModal {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  withButton?: boolean;
  buttonText?: string;
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Modal: FC<IModal> = ({
  children,
  className,
  isOpen,
  withButton,
  buttonText,
  onClick,
}) => {
  return (
    isOpen && (
      <ModalOverlay className={className}>
        <ModalBlock>
          {/* @ts-ignore */}
          <ModalClose onClick={onClick}>
            <CloseIcon />
          </ModalClose>
          {children}

          {withButton && (
            // @ts-ignore
            <ButtonStyled onClick={onClick}>{buttonText}</ButtonStyled>
          )}
        </ModalBlock>
      </ModalOverlay>
    )
  );
};

export default Modal;
