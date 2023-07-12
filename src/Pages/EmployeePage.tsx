import { FC, useContext, useState } from "react";
import styled from "styled-components";

import { CreateUserContext } from "../Context/CreateUserContext";

interface IEmployeePageStyled {
  id?: string;
}
const EmployeePageStyled = styled.div<IEmployeePageStyled>``;

interface IEmployeePage {
  id?: string;
}

const EmployeePage: FC<IEmployeePage> = ({ id }) => {
  //@ts-ignores
  const [currentUser, setCurrentUser] = useState({});

  return (
    <EmployeePageStyled id={id} className="EmployeePage">
      <CreateUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        employee
      </CreateUserContext.Provider>
    </EmployeePageStyled>
  );
};

export default EmployeePage;
