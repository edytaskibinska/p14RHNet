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

//IMPLEMENTATION EXAMPLE :
{/* 
employees: array of objects like: 
const employees = [
  {
    id?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    startDate?: string;
    department?: string;
    street?: string;
    city?: string;
    state?: string;
    zipCode?: number | undefined;
  }
]
<table>
<tbody>
  {employees.map((item: any, index: any) => {
    const isOnTeam = employees.some(
      (employeePerson: any) => employeePerson.id === item.id
    );
    return (
      <EmployeeList
        employeePerson={item}
        isOnTeam={isOnTeam}
        removeEmployee={removeEmployee}
        key={index}
      />
    );
  })}
</tbody>
</table> */}
