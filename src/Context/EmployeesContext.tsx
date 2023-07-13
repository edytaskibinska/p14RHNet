import { createContext, useReducer } from "react";

interface IInitEmpList {
  employees: never[] | any;
}
interface IState {
  employees: Object[];
}
interface IAction {
  type: string;
  payload: Object;
}
//initial state - empty list of employees
const initialState = {
  employees: [],
};

// Reducer function with 'ADD_EMPLOYEE' action type
const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};

//creating store (context) with initial state
const EmployeesContext = createContext<IInitEmpList>(initialState);

//Provode the state (context) for all application
const EmployeesContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EmployeesContext.Provider value={{ state, dispatch } as any}>
      {props.children}
    </EmployeesContext.Provider>
  );
};

export { EmployeesContext, EmployeesContextProvider };
