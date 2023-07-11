import { FC } from "react";
import styled from "styled-components";

interface IEmployeePageStyled {
  id?: string;
}
const EmployeePageStyled = styled.div<IEmployeePageStyled>``;

interface IEmployeePage {
  id?: string;
}

const EmployeePage: FC<IEmployeePage> = ({id}) => {
  return (
    <EmployeePageStyled id={id} className="EmployeePage">Employee</EmployeePageStyled>
  );
};

export default EmployeePage;
