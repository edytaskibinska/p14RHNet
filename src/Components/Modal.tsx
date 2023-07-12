import { FC, ReactNode, MouseEvent } from "react";
import styled from "styled-components";

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
  border: 4px solid red;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBlock = styled.div`
  background-color: white;
  max-width: 500px;
  border-radius: 10px;
  padding: 20px;
  position: relative;
`;

const ModalClose = styled.div`
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  padding: 2px;
  position: absolute;
  top: 5px;
  right: 5px;
  color: white;
`;

interface IModal {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Modal: FC<IModal> = ({ children, className, isOpen, onClick }) => {
  return (
    isOpen && (
      <ModalOverlay className={className}>
        <ModalBlock>
          {/* @ts-ignore */}
          <ModalClose onClick={onClick}>x</ModalClose>
          {children}
        </ModalBlock>
      </ModalOverlay>
    )
  );
};

export default Modal;
