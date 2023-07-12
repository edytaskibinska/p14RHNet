import { FC, useState } from "react";
import styled from "styled-components";

import { Form, Input, Button , Modal} from "../Components";
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
      <h2>Create Employee</h2>
      <CreateEmployeeForm />
    
    </IndexPageStyled>
  );
};

export default IndexPage;
