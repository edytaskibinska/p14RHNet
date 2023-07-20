import { FC } from "react";
import styled from "styled-components";
import CreateEmployeeForm from "../Containers/CreateEmployeeForm";

//S.O.L.I.D - SRP - Single Responsibility Principle
interface IIndexPageStyled {
  id?: string;
}
const IndexPageStyled = styled.div<IIndexPageStyled>`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

interface IIndexPage {
  id?: string;
}

//Home (employee cretion form ) Page component declaration
const IndexPage: FC<IIndexPage> = ({ id }) => {
  return (
    <IndexPageStyled id={id} className="indexPage container">
      <CreateEmployeeForm />
      {/* S.O.L.I.D - SRP - Single Responsibility Principle */}
    </IndexPageStyled>
  );
};

export default IndexPage;
