import { createContext, useContext, useEffect, useState } from "react";

interface IInitEmpList {
  employees: never[] | any;
}

interface IEmployeeContext {
  employees: IInitEmpList;
  addEmployee: () => void;
  removeEmployee: () => void;
}
//TODO use reducer aulieu de localstorage
const initEmployeesList = {
  employees: [],
};

export const EmployeesContext = createContext<IInitEmpList>(initEmployeesList);

const getInitialState = () => {
  const employees = localStorage.getItem("employees");
  return employees ? JSON.parse(employees) : initEmployeesList;
};

const EmployeesContextProvider = (props: any) => {
  const [employees, setEmployees] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employeePerson: any) =>
    setEmployees((prev: any) => {
      const newTeam = {
        ...prev,
        employees: [...prev.employees, employeePerson],
      };
      return newTeam;
    });

  const removeEmployee = (employeePersonId: any) =>
    setEmployees((prev: any) => ({
      ...prev,
      employees: prev.employees.filter(
        (item: any) => item.id !== employeePersonId
      ),
    }));

  return (
    <EmployeesContext.Provider
      value={{ addEmployee, removeEmployee, ...employees } as IEmployeeContext}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};

export const useEmployeesList = () => useContext(EmployeesContext);

export default EmployeesContextProvider;
