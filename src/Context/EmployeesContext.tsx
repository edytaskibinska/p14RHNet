import { createContext, useContext, useEffect, useState } from "react";

const initEmployeesList = {
  employees: [],
};
//@ts-ignore
export const EmployeesContext = createContext();

const getInitialState = () => {
  const employees = localStorage.getItem("employees");
  return employees ? JSON.parse(employees) : initEmployeesList;
};

const EmployeesContextProvider = (props: any) => {
  const [employees, setTeam] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (player: any) =>
    setTeam((prev: any) => {
      const newTeam = {
        ...prev,
        employees: [...prev.employees, player],
      };
      return newTeam;
    });

  const removeEmployee = (playerId: any) =>
    setTeam((prev: any) => ({
      ...prev,
      employees: prev.employees.filter((p: any) => p.id !== playerId),
    }));

  return (
    <EmployeesContext.Provider value={{ addEmployee, removeEmployee, ...employees }}>
      {props.children}
    </EmployeesContext.Provider>
  );
};

export const useTeam = () => useContext(EmployeesContext);

export default EmployeesContextProvider;
