import React from 'react'
import { useState, useEffect } from 'react';
import './cards.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CardData() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);


  useEffect(() => {
    axios("https://localhost:8000/api/articles")
      .then((response) => {
        let a = "";
        setProduct(response.data["hydra:member"])
        setError(null);
      })
      .catch(setError);

  }, []);
  if (error) return <p>An error occurred</p>

  /* product.map((item)=>(console.log(item.id))); */
  return (

   
    <div className='container-product'>
      {product.map((item) => (
      
        <Card key={item.id} id={"produit-" + item.id} className="card-product">
          <Card.Img className='img-product' src={item.image} />
          <Card.Body>
            <Card.Title>{item.titre}</Card.Title>
            <Card.Subtitle>{item.prix}</Card.Subtitle>
            <Card.Text>
              {item.description}
            </Card.Text>
          </Card.Body>
        </Card>
      ))};
      </div>

   

  );

}


export default CardData
