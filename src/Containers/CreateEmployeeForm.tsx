import { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import { useEmployeesList } from "../Context/EmployeesContext";
import { Form, Input, Button, Modal, Select } from "../Components";
import { states, dept } from "../Data/SelectData";

const CreateEmployeeForm: FC = () => {
  const [frstName, setFrstName] = useState("");
  const [lstName, setLstName] = useState("");
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
  //@ts-ignore
  const { employees, addEmployee, removeEmployee } = useEmployeesList();
  return (
    <div>
      <h1>Create employee</h1>
      <Form id="create-empState">
        <Input
          id="first-name"
          forId="first-name"
          type="text"
          label="First Name"
          onChange={(e) => setFrstName(e.target.value)}
        />
        <Input
          id="last-name"
          forId="last-name"
          type="text"
          label="Last Name"
          onChange={(e) => setLstName(e.target.value)}
        />
        <Input
          id="date-of-birth"
          forId="date-of-birth"
          type="date"
          label="Date of Birth"
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <Input
          id="start-date"
          forId="start-date"
          type="date"
          label="Start Date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <fieldset className="address">
          <legend>Address</legend>
          <Input
            id="street"
            forId="street"
            type="text"
            label="Street"
            onChange={(e) => setStreet(e.target.value)}
          />
          <Input
            id="city"
            forId="city"
            type="text"
            label="City"
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
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>

        <Select
            label="Department"
            name="department"
            options={dept}
            onChange={(e) => setDepartment(e.target.value)}
          />

        <Button
          onClick={(e) => {
            console.log("click");
            e.preventDefault();
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
            const employeeExist = employees.some((e: any) => e.id === small_id);
            if (employeeExist) {
              setConfirmation(false);
              return;
            }
            employees.push(newMember);
            setConfirmation(true);
          }}
        >
          Add Employee
        </Button>
      </Form>
      <Modal
        onClick={() => setConfirmation(false)}
        isOpen={confirmation}
        className="modal"
      >
        Employee Created!
      </Modal>
    </div>
  );
};
export default CreateEmployeeForm;
