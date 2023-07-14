import { FC, ReactNode, MouseEventHandler } from "react";
import styled from "styled-components";

//Modal close Icon declarations :
interface ICloseIcon {
  closebtncolor?: string;
  className?: string;
}

const IconSvg = styled.svg<ICloseIcon>`
  max-width: 27px;
  max-height: 27px;
  fill: ${(props) => props.closebtncolor || "black"};
`;

const CloseIcon: FC<ICloseIcon> = ({ closebtncolor }) => {
  return (
    <IconSvg
      height="512px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
      closebtncolor={closebtncolor}
    >
      <g>
        <path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" />
      </g>
    </IconSvg>
  );
};

//Modal basic declarations :
interface IModalBasicStyle {
  id?: string;
}

const ModalContainer = styled.div<IModalBasicStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

//Modal Overlay declarations :
const ModalOverlay = styled.div<IModalBasicStyle>`
  width: 100%;
  padding: 8px;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.5);
`;

//Modal Block declarations :
interface IModalBlock {
  modaltextcolor?: string;
}

const ModalBlock = styled.div<IModalBlock>`
  background-color: white;
  color: ${(props) => props.modaltextcolor || "black"};
  max-width: 400px;
  border-radius: 10px;
  padding: 40px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

//Modal Title declarations :
interface IModalTitle {
  modaltitlecolor?: string;
}
const ModalTitle = styled.h2<IModalTitle>`
  margin-bottom: 20px;
  color: ${(props) => props.modaltitlecolor || "black"};
`;

//Modal Close button declarations :
const ModalClose = styled.button`
  background-color: transparent;
  width: 24px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: -5px;
  right: -3px;
  padding: 0px;
  color: white;
  border: 0px solid transparent;
`;

//Modal Push declarations :
interface IButtonBasicStyle {
  id?: string;
  buttoncolor?: string;
}

const ButtonStyled = styled.button<IButtonBasicStyle>`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  background-color: ${(props) => props.buttoncolor || "black"};
  color: white;
  border-radius: 4px;
  transition-duration: 0.25s;
  border: none;
`;

//Modal Component declaration :
interface IModal {
  children?: ReactNode;
  className?: string;
  modalTitle?: string | boolean;
  isOpen?: boolean;
  clicOutsideToClose?: boolean;
  withButton?: boolean;
  buttonText?: string;
  buttoncolor?: string;
  closebtncolor?: string;
  modaltitlecolor?: string;
  modaltextcolor?: string;
  onClick?: MouseEventHandler<HTMLDivElement> | any;
}

const Modal: FC<IModal> = ({
  children,
  className,
  modalTitle,
  isOpen,
  clicOutsideToClose,
  withButton,
  buttonText,
  buttoncolor,
  closebtncolor,
  modaltitlecolor,
  modaltextcolor,
  onClick,
}) => {
  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalOverlay
          //@ts-ignore
          onClick={clicOutsideToClose && onClick}
          className={className}
        ></ModalOverlay>

        <ModalBlock modaltextcolor={modaltextcolor}>
          <>
            {modalTitle && (
              <ModalTitle modaltitlecolor={modaltitlecolor}>
                {modalTitle}
              </ModalTitle>
            )}
          </>
          <>
            {!clicOutsideToClose && (
              <ModalClose onClick={onClick}>
                <CloseIcon closebtncolor={closebtncolor} />
              </ModalClose>
            )}
          </>

          {children}

          {withButton && (
            <ButtonStyled buttoncolor={buttoncolor} onClick={onClick}>
              {buttonText}
            </ButtonStyled>
          )}
        </ModalBlock>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
