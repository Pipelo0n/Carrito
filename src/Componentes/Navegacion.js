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
            <NavLink href="/"> Redes Sociales </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/"> Contactanos .</NavLink>
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
