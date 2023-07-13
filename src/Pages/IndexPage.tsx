import { FC, useState } from "react";
import styled from "styled-components";
import CreateEmployeeForm from "../Containers/CreateEmployeeForm";

interface IIndexPageStyled {
  id?: string;
}
const IndexPageStyled = styled.div<IIndexPageStyled>``;

interface IIndexPage {
  id?: string;
}

const IndexPage: FC<IIndexPage> = ({ id }) => {
  //@ts-ignore
  const [currentUser, setCurrentUser] = useState({});

  return (
    <IndexPageStyled id={id} className="indexPage container">
      <CreateEmployeeForm />
    </IndexPageStyled>
  );
};

export default IndexPage;
