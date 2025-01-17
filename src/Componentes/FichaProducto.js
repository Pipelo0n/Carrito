import React from "react";
import {
  CardImg,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Modal,
  Container,
  Button,
} from "reactstrap";
import "./FichaProducto.css";
import { listaCarrito } from "../listaCarrito.json";

class FichaProducto extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
      listaCarrito,
      stock: props.props.stock,
    };

    this.toggle = this.toggle.bind(this);
    this.agregarCarrito = this.agregarCarrito.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  agregarCarrito() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));

    if (this.state.stock >= 1) {
      listaCarrito.push({
        titulo: this.props.props.titulo,
        precio: this.props.props.precio,
      });

      this.setState((prevState) => ({
        stock: prevState.stock - 1,
      }));

      const badge = document.getElementById("Badge1");
      badge.innerText = listaCarrito.length;
    } else {
      alert("STOCK AGOTADO");
    }
  }

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Ver Ficha</Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader> {this.props.props.titulo} </ModalHeader>
          <p id="descripcion">{this.props.props.descripcion}</p>
          <ModalBody>
            <CardImg id="fotito" src={this.props.props.imagen} />
            <p className="datito">{this.props.props.dato}</p>
            <p>
              <b>PRECIO: </b> $<b>{this.props.props.precio}</b> pesos.
            </p>
            <p>
              {" "}
              Estado: <b>{this.props.props.estado}</b>
            </p>
            <p>
              Hay <b>{this.state.stock}</b> unidades de este producto.
            </p>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button id="agregar" onClick={this.agregarCarrito}>
              Agregar al carro
            </Button>
            <Button onClick={this.toggle}>Atrás</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default FichaProducto;
