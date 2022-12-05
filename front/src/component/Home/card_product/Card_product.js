import React from 'react'
import { useState, useEffect } from 'react';
import './card_product.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function CardProduct() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);


  useEffect(() => {
    axios("https://localhost:8000/api/articles")
      .then((response) => {
        setProduct(response.data["hydra:member"])
        setError(null);
      })
      .catch(setError);

  }, []);
  if (error) return <p>An error occurred</p>

  console.log(product);
  return (

   
    <div className='container-product'>
      {product.map((item) => (
        <Link to={"/article/" + item.id} key={item.id}>
        <Card id={"produit-" + item.id} className="card-product">
          <Card.Img className='img-product' src={item.image} alt={item.titre} />
          <Card.Body> 
            <Card.Title>{item.titre}</Card.Title>
            <Card.Subtitle>{item.prix}</Card.Subtitle>
            <Card.Text>
              {item.description.substring(0,20)+"..."}
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      ))};
      </div>

   

  );

}


export default CardProduct;
