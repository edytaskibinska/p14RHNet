import { FC } from "react";
import styled from "styled-components";
import EmployeesContainer from "../Containers/EmployeesContainer";

//S.O.L.I.D - SRP - Single Responsibility Principle
interface IEmployeePageStyled {
  id?: string;
}
const EmployeePageStyled = styled.div<IEmployeePageStyled>`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

interface IEmployeePage {
  id?: string;
}

//Employee Page component declaration
const EmployeePage: FC<IEmployeePage> = ({ id }) => {
  return (
    <EmployeePageStyled id={id} className="EmployeePage">
      <EmployeesContainer />
      {/* S.O.L.I.D - SRP - Single Responsibility Principle */}
    </EmployeePageStyled>
  );
};

export default EmployeePage;
