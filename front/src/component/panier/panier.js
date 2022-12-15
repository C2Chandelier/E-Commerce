import React from 'react'
import { useState, useEffect } from 'react';
import './panier.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Navbar from '../NavbarComponent/Navbar/ Navbar';

function Panier() {
  const [article, setArticle] = useState([]);
  let total = 0;
  let id_panier = localStorage.getItem("id_panier")

  useEffect(() => {
    if (id_panier !== null) {
      axios.get("https://localhost:8000/api/panier_articles?panier=" + id_panier)
        .then((response) => {
          setArticle(response.data["hydra:member"]);
        })
    }
  }, [id_panier]);

  article.map((item) => {

    total = total + parseFloat(item.articles.prix);
  })

  function DeleteItem(e) {
    const id_article = e.target.id.substring(4)
    article.filter((res) => {
      if (parseInt(res.articles.id) === parseInt(id_article)) {
        article.splice(article.indexOf(res), 1);
        axios.delete('https://localhost:8000' + res["@id"])
        setArticle(article)
      }
    })
  }


  return (
    <div>
      <header><Navbar /></header>
      <div className='contenairedetails'>
        {article.length > 0 ? article.map((item) => (
          <Card id={"produit-" + item.articles.id} key={article.indexOf(item)} className="card">
            <Card.Img className='card__img' src={item.articles.image} alt={item.articles.titre} />
            <Card.Body className='card__body'>
              <Link to={"/article/" + item.articles.id} className="link_none">
                <Card.Title className='card__title' >{item.articles.titre}</Card.Title>
              </Link>
              <Card.Subtitle className='card__price'>{item.articles.prix}</Card.Subtitle>
              <button id={"btn_" + item.articles.id} onClick={(e) => DeleteItem(e)}>&#x2716;</button>

            </Card.Body>
          </Card>

        ))

          :
          <div>
            <p>Votre panier est vide.</p>
          </div>
        };
      </div>
      <p>total : {total}€</p>
      <Link className="btn-back" to={"/"}>Retour</Link>
    </div>
  );

}


export default Panier;
