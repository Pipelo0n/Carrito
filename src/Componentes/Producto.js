import React from "react";
import {
  CardText,
  CardSubtitle,
  CardBody,
  CardImg,
  Col,
  Card,
  CardTitle,
} from "reactstrap";
import "./Producto.css";
import FichaProducto from "./FichaProducto";

class Producto extends React.Component {
  render() {
    return (
      <Col sm="4">
        <Card className="Card" body outline color="primary">
          <CardImg src={this.props.imagen} />
          <CardBody>
            <CardTitle>{this.props.titulo}</CardTitle>
            <CardSubtitle>
              {" "}
              <b>Valor: </b> {this.props.precio}{" "}
            </CardSubtitle>
            <CardText>{this.props.descripcion}</CardText>
            <FichaProducto props={this.props} />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Producto;
