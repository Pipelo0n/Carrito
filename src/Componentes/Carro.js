import React from "react";
import {
  Badge,
  Button,
  Popover,
  PopoverBody,
  PopoverHeader,
  Table,
} from "reactstrap";
import { listaCarrito } from "../listaCarrito";
import "./FichaProducto.css";

class Carro extends React.Component {
  constructor() {
    super();
    this.state = {
      popoverOpen: false,
      listaCarrito,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      popoverOpen: !prevState.popoverOpen,
    }));
  }

  //        ////////////////////////////////////////////////////////////////////////////////////////
  //!                      CODIGO PARA HACER SUMA DEL TOTAL DE PRODUCTOS DEL CARRITO
  //  linea 36, error.
  //        ////////////////////////////////////////////////////////////////////////////////////////

  sumaTotal() {
    let total = 0;
    let sumaTotal = this.state.listaCarrito.map((listaCarrito) => {
      total += parseFloat(listaCarrito.precio) * 1000;
    });
    return total;
  }
  //        ////////////////////////////////////////////////////////////////////////////////////////

  // ::::::::::  VENTANA  CARRITO  ::::::::::
  render() {
    const arregloCarrito = this.state.listaCarrito.map((listaCarrito, i) => {
      return (
        <tr>
          <td>{(i += 1)}</td>
          <td>{listaCarrito.titulo}</td>
          <td>{listaCarrito.precio}</td>
        </tr>
      );
    });
    return (
      <div>
        <Button id="Popover1" color="dark">
          <span className="material-icons">shopping_cart</span>
          <Badge color="dark" id="Badge1">
            {listaCarrito.length}
          </Badge>
        </Button>
        <Popover
          target="Popover1"
          placement="bottom"
          isOpen={this.state.popoverOpen}
          toggle={this.toggle}
        >
          <PopoverHeader> LISTA PRODUCTOS </PopoverHeader>
          <PopoverBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>PRODUCTO</th>
                  <th>PRECIO</th>
                </tr>
              </thead>
              <tbody>{arregloCarrito}</tbody>
              <tfoot>
                <td>TOTAL</td>
                <td></td>
                <td>$ {Intl.NumberFormat("de-DE").format(this.sumaTotal())}</td>
              </tfoot>
            </Table>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default Carro;
