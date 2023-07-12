import { FC } from "react";

import styled from "styled-components";

interface IEmployee {
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
const EmployeeListStyled = styled.tr`
  border: 2px solid green;
  td {
    padding: 5px;
  }
`;

interface IEmployeeList {
  player: {};
  isOnTeam: boolean;
  addPlayer?: any;
  removePlayer?: any;
}

const EmployeeList: FC<IEmployeeList> = ({
  player = {},
  isOnTeam,
  addPlayer,
  removePlayer,
}) => {
  const {
    //@ts-ignore
    id,
    //@ts-ignore
    firstName,
    //@ts-ignore
    lastName,
    //@ts-ignore
    dateOfBirth,
    //@ts-ignore
    startDate,
    //@ts-ignore
    department,
    //@ts-ignore
    street,
    //@ts-ignore
    city,
    //@ts-ignore
    state,
    //@ts-ignore
    zipCode,
  } = player;

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
          <button onClick={() => removePlayer(id)}>Remove</button>
        ) : (
          <button onClick={() => addPlayer(player)}>Add to team</button>
        )}
      </td>
    </EmployeeListStyled>
  );
};
export default EmployeeList;
