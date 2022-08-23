import React from "react";
import { NavItem, Nav, Navbar, NavbarBrand, NavLink } from "reactstrap";
import Carro from "./Carro";

class Navegacion extends React.Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"> {this.props.titulo} </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://www.google.cl" target="_blank">
              {" "}
              Redes Sociales{" "}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.google.cl" target="_blank">
              {" "}
              Contactanos .
            </NavLink>
          </NavItem>
          <NavItem>
            <Carro />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navegacion;
