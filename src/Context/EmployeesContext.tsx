import { createContext, useReducer, Dispatch, ReactNode } from "react";

export interface IInitEmpList {
  employees: never[];
}
interface IState {
  employees: Object[];
}
interface IAction {
  type: string;
  payload: Object;
}


export interface IContextType {
  state: IState;
  dispatch: Dispatch<IAction>;
}
interface EmployeesContextProviderProps {
  children: ReactNode;
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
const EmployeesContext = createContext<IContextType | IInitEmpList | undefined>(
  initialState
);

//Privode the state (context) for all application
const EmployeesContextProvider = (props: EmployeesContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EmployeesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </EmployeesContext.Provider>
  );
};

export { EmployeesContext, EmployeesContextProvider };
