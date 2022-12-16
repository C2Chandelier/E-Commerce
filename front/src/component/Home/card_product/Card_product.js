import React from 'react'
import { useState, useEffect } from 'react';
import './card_product.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function CardProduct() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);
  let promo = 0;



  useEffect(() => {
    axios("https://localhost:8000/api/articles")
      .then((response) => {
        setProduct(response.data["hydra:member"])
        setError(null);
      })
      .catch(setError);

  }, []);
  if (error) return <p>An error occurred</p>

  product.filter(res => {
    if (res.promo === true) {
      promo = (promo + 1)
    }
  })

  return (
    <div className="contenaire">
      {promo !== 0 ?
        <div className="promo">
          <h2>Promotion !</h2>
          <div className="container-product-promo">
            {product.map((item) => (
              item.promo === true ?
                <Card id={"produit-" + item.id} key={item.id} className="card">
                  <Link to={"/article/" + item.id} className="link_none">
                    <Card.Img className='card__img' src={item.image} alt={item.titre} />
                    <Card.Body className='card__body'>
                      <Card.Title className='card__title' >{item.titre}</Card.Title>
                      <Card.Subtitle className='card__price'>{item.prix}</Card.Subtitle>
                    </Card.Body>
                  </Link>
                </Card>
                :
                null
            ))}
          </div>
        </div>
        : null
      }



      <div className='container-product'>
        {product.map((item) => (
          item.promo === false ?
            <Card id={"produit-" + item.id} key={item.id} className="card">
              <Link to={"/article/" + item.id} className="link_none">
                <Card.Img className='card__img' src={item.image} alt={item.titre} />
                <Card.Body className='card__body'>
                  <Card.Title className='card__title' >{item.titre}</Card.Title>
                  <Card.Subtitle className='card__price'>{item.prix}</Card.Subtitle>
                </Card.Body>
              </Link>
            </Card>
            :
            null
        ))}
      </div>
    </div >
  );
}


export default CardProduct;
