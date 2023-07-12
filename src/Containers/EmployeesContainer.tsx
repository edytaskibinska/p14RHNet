import { FC } from "react";

import { useTeam } from "../Context/EmployeesContext";
import EmployeeList from "./EmployeeList";

const EmployeesContainer: FC = () => {
  //@ts-ignore
  const { employees, removeEmployee } = useTeam();
  const size = employees.length;
  console.log("employees", employees);
  return (
    <div>
      {size === 0 ? <p>no employees found</p> : <p>Total: {size} Employees</p>}

      {size > 0 && (
        <table>
          {employees.map((p: any, index: any) => {
            const isOnTeam = employees.some((player: any) => player.id === p.id);
            return (
              <tbody>
                <EmployeeList
                  player={p}
                  isOnTeam={isOnTeam}
                  removeEmployee={removeEmployee}
                  key={index}
                />
              </tbody>
            );
          })}
        </table>
      )}
    </div>
  );
};
export default EmployeesContainer;
