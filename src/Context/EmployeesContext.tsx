import { createContext, useContext, useEffect, useState } from "react";

const initEmployeesList = {
  team: [],
};
//@ts-ignore
export const EmployeesContext = createContext();

const getInitialState = () => {
  const team = localStorage.getItem("team");
  return team ? JSON.parse(team) : initEmployeesList;
};

const EmployeesContextProvider = (props: any) => {
  const [team, setTeam] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  const addPlayer = (player: any) =>
    setTeam((prev: any) => {
      const newTeam = {
        ...prev,
        team: [...prev.team, player],
      };
      return newTeam;
    });

  const removePlayer = (playerId: any) =>
    setTeam((prev: any) => ({
      ...prev,
      team: prev.team.filter((p: any) => p.id !== playerId),
    }));

  return (
    <EmployeesContext.Provider value={{ addPlayer, removePlayer, ...team }}>
      {props.children}
    </EmployeesContext.Provider>
  );
};

export const useTeam = () => useContext(EmployeesContext);

export default EmployeesContextProvider;
