import { createContext } from "react";

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
//TODO supprimer une fois implementé
// const employeeState: IEmployee = {
//   id: "1",
//   firstName: "Tetet",
//   lastName: "Otto",
//   dateOfBirth: "",
//   startDate: "",
//   department: "",
//   street: "",
//   city: "",
//   state: "",
//   zipCode: undefined,
// };

export const CreateUserContext = createContext({});
