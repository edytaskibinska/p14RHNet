import { FC } from "react";

import styled from "styled-components";
import { IEmployee } from "../Interfaces/IEmployee";

const EmployeeListStyled = styled.tr`
  border: 2px solid green;
  td {
    padding: 5px;
  }
`;

interface IEmployeeList {
  employeePerson: {};
  isOnTeam: boolean;
  addEmployee?: any;
  removeEmployee?: any;
}

const EmployeeList: FC<IEmployeeList> = ({
  employeePerson = {},
  isOnTeam,
  addEmployee,
  removeEmployee,
}) => {
  const {
    id,
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    department,
    street,
    city,
    state,
    zipCode,
  } = employeePerson as IEmployee;

  return (
    <EmployeeListStyled>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{dateOfBirth}</td>
      <td>{startDate}</td>
      <td>{department}</td>
      <td>{street}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{zipCode}</td>
      <td>
        {isOnTeam ? (
          <button onClick={() => removeEmployee(id)}>Remove</button>
        ) : (
          <button onClick={() => addEmployee(employeePerson)}>
            Add to employees
          </button>
        )}
      </td>
    </EmployeeListStyled>
  );
};
export default EmployeeList;
