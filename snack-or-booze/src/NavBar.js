import React, { useEffect } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Capitalize } from "./utilities";

function NavBar({ categories, items }) {
  console.log("rendering navbar");
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            {categories.map((category) => {
              const numItems = items[category].length;
              return (
                <NavLink key={category} className="navlink" to={`/${category}`}>
                  {Capitalize(category) + `(${numItems})`}
                </NavLink>
              );
            })}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
