 
 import { FC, useMemo, useState } from "react";
import styled from "styled-components";
import { useEmployeesList } from "../Context/EmployeesContext";

import { Button } from "../Components";

import DataTable from "react-data-table-component";

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  &:hover {
    cursor: pointer;
  }
`;

interface IFilterComponent {
  filterText: any;
  onFilter: any;
  onClear: any;
}
const FilterComponent: FC<IFilterComponent> = ({
  filterText,
  onFilter,
  onClear,
}) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <Button onClick={onClear}>X</Button>
  </>
);

const columns = [
  {
    name: "First Name",
    selector: (row: any) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row: any) => row.lastName,
    sortable: true,
  },
  {
    name: "dateOfBirth",
    selector: (row: any) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: "startDate",
    selector: (row: any) => row.startDate,
    sortable: true,
  },
  {
    name: "department",
    selector: (row: any) => row.department,
    sortable: true,
  },
  {
    name: "street",
    selector: (row: any) => row.street,
    sortable: true,
  },
  {
    name: "city",
    selector: (row: any) => row.city,
    sortable: true,
  },
  {
    name: "state",
    selector: (row: any) => row.state,
    sortable: true,
  },
  {
    name: "zipCode",
    selector: (row: any) => row.zipCode,
    sortable: true,
  },
];

const EmployeesContainer: FC = () => {
  //@ts-ignore
  const { employees, removeEmployee } = useEmployeesList();
  const size = employees.length;
  console.log("employees", employees);

  //data table
  const [filterText, setFilterText] = useState("");
  const [resetpaginationtoggle, setResetPaginationToggle] = useState(false);
  const filtereditems = employees.filter(
    (item: any) =>
      item.firstName &&
      item.firstName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subheadercomponentmemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetpaginationtoggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e: any) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetpaginationtoggle]);

  //END data table
  return (
    <div>
      {size === 0 ? <p>no employees found</p> : <p>Total: {size} Employees</p>}

      {size > 0 && (
        <>
          <DataTable
            title="Contact List"
            columns={columns}
            data={filtereditems}
            pagination
            paginationResetDefaultPage={resetpaginationtoggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subheadercomponentmemo}
            //selectableRows
            persistTableHead
          />
        </>
      )}
    </div>
  );
};
export default EmployeesContainer;
