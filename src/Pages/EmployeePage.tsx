import { FC, useContext, useState } from "react";
import styled from "styled-components";
import EmployeesContainer from "../Containers/EmployeesContainer";

interface IEmployeePageStyled {
  id?: string;
}
const EmployeePageStyled = styled.div<IEmployeePageStyled>``;

interface IEmployeePage {
  id?: string;
}

const EmployeePage: FC<IEmployeePage> = ({ id }) => {
  return (
    <EmployeePageStyled id={id} className="EmployeePage">
      employee
      <EmployeesContainer />
    </EmployeePageStyled>
  );
};

export default EmployeePage;
