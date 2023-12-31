import { FC, useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { Form, Fieldset, Input, Button, Select, Title } from "../Components";
import { states, dept } from "../Data/SelectData";
import { EmployeesContext, IContextType } from "../Context/EmployeesContext";
import { IEmployee } from "../Interfaces/IEmployee";
import { colors } from "../Data/Colors";

//Modal from npm design system
import { Modal } from "@e-skibinska/proton-design-system";

//Form for employee creation
const CreateEmployeeForm: FC = () => {
  const [frstName, setFrstName] = useState("");
  const [lstName, setLstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [theState, setTheState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const context = useContext(EmployeesContext) as IContextType;
  const { state, dispatch } = context;
  const employees = state.employees;

  return (
    <div>
      <Title>Create employee</Title>
      <Form id="create-empState">
        <Input
          id="first-name"
          forId="first-name"
          type="text"
          label="First Name *"
          placeholder="First Name"
          onChange={(e) => setFrstName(e.target.value)}
          className={firstNameError ? "error" : ""}
        />
        <Input
          id="last-name"
          forId="last-name"
          type="text"
          label="Last Name *"
          placeholder="Last Name"
          onChange={(e) => setLstName(e.target.value)}
          className={lastNameError ? "error" : ""}
        />
        <Input
          id="date-of-birth"
          forId="date-of-birth"
          type="date"
          label="Date of Birth"
          placeholder="Date of Birth"
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <Input
          id="start-date"
          forId="start-date"
          type="date"
          label="Start Date"
          placeholder="Start Date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Fieldset
          id="address"
          legend={<legend>Address</legend>}
          className="address"
        >
          <Input
            id="street"
            forId="street"
            type="text"
            label="Street"
            placeholder="Street"
            onChange={(e) => setStreet(e.target.value)}
          />
          <Input
            id="city"
            forId="city"
            type="text"
            label="City"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />

          <Select
            label="State"
            name="state"
            options={states}
            onChange={(e) => setTheState(e.target.value)}
          />

          <Input
            id="zip-code"
            forId="zip-code"
            type="number"
            label="Zip Code"
            placeholder="Zip Code"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </Fieldset>

        <Select
          label="Department"
          name="department"
          options={dept}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            // Vérifie si les champs firstName et lastName sont vides
            if (frstName.trim() === "") {
              setFirstNameError(true);
              return;
            }
            if (lstName.trim() === "") {
              setLastNameError(true);
              return;
            }

            // Réinitialiseles messages d'erreur s'ils étaient affichés précédemment
            setFirstNameError(false);
            setLastNameError(false);

            const newMember = {
              id: small_id,
              firstName: frstName,
              lastName: lstName,
              dateOfBirth: birthDate,
              startDate: startDate,
              department: department,
              street: street,
              city: city,
              state: theState,
              zipCode: zipCode,
            };

            const employeeExist = employees.some(
              (e: IEmployee) => e.id === small_id
            );
            if (employeeExist) {
              setConfirmation(false);
              return;
            }
            dispatch({
              type: "ADD_EMPLOYEE",
              payload: newMember,
            });
            setConfirmation(true);
          }}
        >
          {" "}
          Add Employee
        </Button>
      </Form>
      <Modal
        onClick={() => setConfirmation(false)}
        isOpen={confirmation}
        className="modal"
        modalTitle="Création de l'employée"
        closebtncolor={colors.greenMedium}
        buttoncolor={colors.black}
        modaltitlecolor={colors.black}
        modaltextcolor={colors.green}
      >
        Employee Created!
      </Modal>
    </div>
  );
};
export default CreateEmployeeForm;
