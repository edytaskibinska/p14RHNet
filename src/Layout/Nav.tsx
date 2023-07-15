import { FC } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../Data/Colors";
import styled from "styled-components";

//Navigation component declaration
const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  font-weight: 600;
  margin-bottom: 20px;
  .navLink {
    padding: 10px;
    text-decoration: none;
    color: ${colors.greenClear};
  }
  .navLink.active {
    text-decoration: underline;
    color: ${colors.black};
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
