import { FC } from "react";

import { useEmployeesList } from "../Context/EmployeesContext";
import EmployeeList from "./EmployeeList";

const EmployeesContainer: FC = () => {
  //@ts-ignore
  const { employees, removeEmployee } = useEmployeesList();
  const size = employees.length;
  console.log("employees", employees);
  return (
    <div>
      {size === 0 ? <p>no employees found</p> : <p>Total: {size} Employees</p>}

      {size > 0 && (
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
        </table>
      )}
    </div>
  );
};
export default EmployeesContainer;
