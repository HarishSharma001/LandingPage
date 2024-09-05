import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";


const Cards = ({ title, text, image }) => {
  return (
    <>     
    <Card className="card-header" style={{ width: '18rem' }}>
      <Card.Img variant="top" className="image-head" src={image} />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <Button variant="primary" className=" p-2 card-footer">10000</Button>
      </Card.Body>
    </Card>
    
    </>      
  );
};

export default Cards;
