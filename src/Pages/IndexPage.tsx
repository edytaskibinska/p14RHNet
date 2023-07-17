import { FC, useState } from "react";
import styled from "styled-components";
import CreateEmployeeForm from "../Containers/CreateEmployeeForm";

//S.O.L.I.D - SRP - Single Responsibility Principle
interface IIndexPageStyled {
  id?: string;
}
const IndexPageStyled = styled.div<IIndexPageStyled>``;

interface IIndexPage {
  id?: string;
}

//Home (employee cretion form ) Page component declaration
const IndexPage: FC<IIndexPage> = ({ id }) => {
  //@ts-ignore
  const [currentUser, setCurrentUser] = useState({});

  return (
    <IndexPageStyled id={id} className="indexPage container">
      <CreateEmployeeForm />
      {/* S.O.L.I.D - SRP - Single Responsibility Principle */}
    </IndexPageStyled>
  );
};

export default IndexPage;
