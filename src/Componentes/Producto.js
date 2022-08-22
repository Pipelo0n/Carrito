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
      <Col sm="3">
        <Card className="Card">
          <CardTitle>{this.props.titulo}</CardTitle>
          <CardImg src={this.props.imagen} />
          <CardBody className="cardBody">
            <CardText>{this.props.descripcion}</CardText>
            {/* <CardSubtitle>
              {" "}
              <b>Valor: </b> {this.props.precio}{" "}
            </CardSubtitle> */}
            <FichaProducto props={this.props} />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Producto;
