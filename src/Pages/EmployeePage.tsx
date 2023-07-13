import { FC, useContext, useState } from "react";
import styled from "styled-components";
import { useEmployeesList } from "../Context/EmployeesContext";
import EmployeesContainer from "../Containers/EmployeesContainer";

interface IEmployeePageStyled {
  id?: string;
}
const EmployeePageStyled = styled.div<IEmployeePageStyled>``;

interface IEmployeePage {
  id?: string;
}

const EmployeePage: FC<IEmployeePage> = ({ id }) => {
  //@ts-ignore
  const { employees, removeEmployee } = useEmployeesList();
  return (
    <EmployeePageStyled id={id} className="EmployeePage">
      employee
      <EmployeesContainer />
    </EmployeePageStyled>
  );
};

export default EmployeePage;
