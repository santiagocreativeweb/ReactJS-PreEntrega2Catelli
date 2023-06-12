import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const backButtonPath = "/category/computadoras"; // Ruta a la que quieres que te lleve el botón "Volver"

  const buttonText = currentPath === `/item/${productData.id}` ? (
    <Link to={backButtonPath}>Volver</Link>
  ) : (
    <Link to={`/item/${productData.id}`}>Ir a detalle</Link>
  );

  return (
    <Card
      style={{
        display: "inline-grid",
        marginTop: "20px",
        marginRight: "25px",
        width: "300px",
      }}
    >
      <Card.Img style={{ width: "298px" }} variant="top" src={productData.images[0]} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        <Card.Text>Precio: ${productData.price}</Card.Text>
        {buttonText} 
      </Card.Body>
    </Card>
  );
};

export default ProductCard;


