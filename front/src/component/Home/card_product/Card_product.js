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

  return (

   
    <div className='container-product'>
      {product.map((item) => (
     
        <Card id={"produit-" + item.id} key={item.id} className="card">
        <Link to={"/article/" + item.id} className="link_none">
          <Card.Img className='card__img' src={item.image} alt={item.titre} />
          <Card.Body className='card__body'> 
            <Card.Title className='card__title' >{item.titre}</Card.Title>
            <Card.Subtitle className='card__price'>{item.prix}€</Card.Subtitle>
          </Card.Body>
        </Link>
        </Card>
       
      ))};
     
      </div>
    

   

  );

}


export default CardProduct;
