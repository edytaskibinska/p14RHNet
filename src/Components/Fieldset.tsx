import { FC, FieldsetHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

//S.O.L.I.D - SRP - Single Responsibility Principle

//Fieldset component declaration
interface IFieldsetBasicStyle {
  id?: string;
}

const FieldsetStyled = styled.fieldset<IFieldsetBasicStyle>`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #8ca1a5;
  border-radius: 5px;
`;

interface IFieldset extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  id: string;
  children: ReactNode;
  className?: string;
  legend?: ReactNode;
}

const Fieldset: FC<IFieldset> = ({
  id,
  legend,
  children,
  className,
  ...restProps
}) => {
  return (
    <FieldsetStyled
      id={id}
      className={className}
      {...restProps} //S.O.L.I.D - LS-  Liskov Substitution
    >
      <>{legend}</> {/* S.O.L.I.D - Open-Closed principle */}
      {children}
    </FieldsetStyled>
  );
};

export default Fieldset;
