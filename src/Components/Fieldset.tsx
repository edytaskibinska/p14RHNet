import { FC, ReactNode } from "react";
import styled from "styled-components";

//Fieldset component declaration
interface IFieldsetBasicStyle {
  id?: string;
}

const FieldsetStyled = styled.fieldset<IFieldsetBasicStyle>`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #8CA1A5;
  border-radius: 5px;
`;

interface IFieldset {
  id?: string;
  legend?: string;
  children?: ReactNode;
  className?: string;
}

const Fieldset: FC<IFieldset> = ({ id, legend, children, className }) => {
  return (
    <FieldsetStyled id={id} className={className}>
      <legend>{legend}</legend>
      {children}
    </FieldsetStyled>
  );
};

export default Fieldset;
