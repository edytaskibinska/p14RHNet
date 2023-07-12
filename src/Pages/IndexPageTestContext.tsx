import { FC, useState } from "react";
import styled from "styled-components";

import { Form, Input, Button } from "../Components";

interface IIndexPageStyled {
  id?: string;
}
const IndexPageStyled = styled.div<IIndexPageStyled>``;

interface IIndexPage {
  id?: string;
}

const IndexPage: FC<IIndexPage> = ({ id }) => {
  // const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.value.length > 0) {
  //     //setCurrentUser({ firstName: e.target.value })
  //     //setName();
  //   } else if (e.target.value.length === 0) {
  //     setName("");
  //   }
  // };
  // const [currentUser, setCurrentUser] = useState({name : ""});

  //@ts-ignore
  const [currentUser, setCurrentUser] = useState({});

  return (
    <IndexPageStyled id={id} className="indexPage container">
      <h2>Create Employee</h2>
      <Form id="create-empState">
        <Input
          id="first-name"
          forId="first-name"
          type="text"
          label="First Name"
          onChange={(e) => console.log("change")}
        />
        <Input
          id="last-name"
          forId="last-name"
          type="text"
          label="Last Name"
          onChange={(e) => console.log("change")}
        />
        <Input
          id="date-of-birth"
          forId="date-of-birth"
          type="text"
          label="Date of Birth"
        />
        <Input
          id="start-date"
          forId="start-date"
          type="text"
          label="Start Date"
        />

        <fieldset className="address">
          <legend>Address</legend>
          <Input id="street" forId="street" type="text" label="Street" />
          <Input id="city" forId="city" type="text" label="City" />
          <label htmlFor="state">State</label>
          <select name="state" id="state">
            <option>oklahoma</option>
            <option>state fake</option>
          </select>
          <Input
            id="zip-code"
            forId="zip-code"
            type="number"
            label="Zip Code"
          />
        </fieldset>
        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>

        <Button
          onClick={(e) => {
            console.log("click");
            e.preventDefault();
          }}
        >
          Save
        </Button>
      </Form>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </IndexPageStyled>
  );
};

export default IndexPage;
