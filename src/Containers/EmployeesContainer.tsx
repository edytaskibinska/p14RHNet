import { FC } from "react";

import { useTeam } from "../Context/EmployeesContext";
import EmployeeList from "./EmployeeList";

const EmployeesContainer: FC = () => {
  //@ts-ignore
  const { team, removePlayer } = useTeam();
  const size = team.length;
  console.log("team", team);
  return (
    <div>
      {size === 0 ? <p>no employees found</p> : <p>Total: {size} Employees</p>}

      {size > 0 && (
        <table>
          {team.map((p: any, index: any) => {
            const isOnTeam = team.some((player: any) => player.id === p.id);
            return (
              <tbody>
                <EmployeeList
                  player={p}
                  isOnTeam={isOnTeam}
                  removePlayer={removePlayer}
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
