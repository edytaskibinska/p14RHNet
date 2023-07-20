import {
  FC,
  useMemo,
  useState,
  useContext,
  ChangeEventHandler,
  MouseEvent,
  ChangeEvent,
} from "react";
import styled from "styled-components";
import { EmployeesContext } from "../Context/EmployeesContext";

import { Button } from "../Components";
import { IEmployee } from "../Interfaces/IEmployee";
import DataTable, { Selector, TableColumn } from "react-data-table-component";

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
  filterText: string;
  onFilter: ChangeEventHandler<HTMLInputElement>;
  onClear: (event: MouseEvent<HTMLElement>) => void;
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
    <Button onClick={onClear}>Clear</Button>
  </>
);

const columns: TableColumn<IEmployee>[] = [
  {
    name: "First Name",
    selector: (row: Selector<IEmployee> | any) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row: Selector<IEmployee> | any) => row.lastName,
    sortable: true,
  },
  {
    name: "dateOfBirth",
    selector: (row: Selector<IEmployee> | any) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: "startDate",
    selector: (row: Selector<IEmployee> | any) => row.startDate,
    sortable: true,
  },
  {
    name: "department",
    selector: (row: Selector<IEmployee> | any) => row.department,
    sortable: true,
  },
  {
    name: "street",
    selector: (row: Selector<IEmployee> | any) => row.street,
    sortable: true,
  },
  {
    name: "city",
    selector: (row: Selector<IEmployee> | any) => row.city,
    sortable: true,
  },
  {
    name: "state",
    selector: (row: Selector<IEmployee> | any) => row.state,
    sortable: true,
  },
  {
    name: "zipCode",
    selector: (row: Selector<IEmployee> | any) => row.zipCode,
    sortable: true,
  },
];
const TableContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  overflow: hidden; 
  .rdt_TableCol,
  .rdt_TableCell {
    box-sizing: border-box;
    min-width: 0px;
    max-widtrh: 11.1%;

  }
  .rdt_TableHeader > div {
    font-size: 1.5rem;
    font-weight: 600;
  }

  header {
    display: flex;
    input {
      height: 41px;
    }
    button {
      width: auto;
      margin-top: 0;
    }
  }
`;

//Form for employees list
const EmployeesContainer: FC = () => {
  //@ts-ignore
  const { state, dispatch } = useContext(EmployeesContext);
  const employees = state.employees;
  const size = employees.length;
  console.log("employees", employees);

  //data table
  const [filterText, setFilterText] = useState("");
  const [resetpaginationtoggle, setResetPaginationToggle] = useState(false);
  const filtereditems = employees.filter(
    (item: IEmployee) =>
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
        onFilter={(e: ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetpaginationtoggle]);

  return (
    <TableContainer>
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
            //workaroun error:
          />
        </>
      )}
    </TableContainer>
  );
};
export default EmployeesContainer;
