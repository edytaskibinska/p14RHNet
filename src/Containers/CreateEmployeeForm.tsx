import { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import { useTeam } from "../Context/EmployeesContext";
import EmployeeList from "./EmployeeList";
import { Form, Input, Button } from "../Components";

const CreateEmployeeForm: FC = () => {
  const employeesArray: [] = [];
  const [frstName, setFrstName] = useState("");
  const [lstName, setLstName] = useState("");
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  //@ts-ignore
  const { team, addPlayer, removePlayer } = useTeam();
  return (
    <div>
      <h1>Create employee</h1>
      <Form id="create-empState">
        <Input
          id="first-name"
          forId="first-name"
          type="text"
          label="First Name"
          onChange={(e) => setFrstName(e.target.value)}
        />

        <Input
          id="last-name"
          forId="last-name"
          type="text"
          label="Last Name"
          onChange={(e) => setLstName(e.target.value)}
        />
        <Button
          onClick={(e) => {
            console.log("click");
            e.preventDefault();
            const newMember = {
              id: small_id,
              firstName: frstName,
              lastName: lstName,
              dateOfBirth: "QB",
              startDate: "01/02/2023",
              department: "oklahoma",
              street: "Oxford Street",
              city: "London",
              state: "UK",
              zipCode: "123",
            };
            team.push(newMember);
            // setCurrentUser({ currentUser });
          }}
        >
          Add Employee
        </Button>
      </Form>
      {employeesArray.map((p: any, index: any) => {
        const isOnTeam = team.some((player: any) => player.id === p?.id);
        return (
          <table>
            <>{console.log("Employee added to team", team)}</>

            <tbody>
              <EmployeeList
                player={p}
                isOnTeam={isOnTeam}
                addPlayer={addPlayer}
                removePlayer={removePlayer}
                key={index}
              />
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
export default CreateEmployeeForm;
