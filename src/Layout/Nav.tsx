import { FC } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  .navLink {
    padding: 10px;
  }
  .navLink.active {
    color: red;
  }
`;

interface INav {
  id?: string;
}

const Nav: FC<INav> = ({ id }) => {
  return (
    <NavStyled id={id}>
      <NavLink className="navLink" to="/">
        Create Employee
      </NavLink>
      <NavLink className="navLink" to="/employees">
        View Current Employees
      </NavLink>
    </NavStyled>
  );
};

export default Nav;
