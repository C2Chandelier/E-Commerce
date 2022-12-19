import React from 'react'
import { useState, useEffect } from 'react';
import './panier.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Navbar from '../NavbarComponent/Navbar/ Navbar';

function Panier() {
  const [article, setArticle] = useState([]);
  const [length, setLength] = useState(null)
  let total = 0;
  let id_panier = localStorage.getItem("id_panier")

  useEffect(() => {
    if (id_panier !== null) {
      axios.get("https://localhost:8000/api/panier_articles?panier=" + id_panier)
        .then((response) => {
          setArticle(response.data["hydra:member"]);
        })
    }
  }, [id_panier, length]);

  article.map((item) => {

    total = total + parseFloat(item.articles.prix) * parseInt(item.quantity);
  })

  async function DeleteItem(id) {
    const id_article = id
    console.log(id_article)
    article.filter((res) => {
      if (parseInt(res.articles.id) === parseInt(id_article)) {
        article.splice(article.indexOf(res), 1);
        axios.delete('https://localhost:8000' + res["@id"])
          .then((res) => {
            setLength(article.length)
            setArticle(article)
          })
      }
    })
  }

  article.filter((product) => {
    if(parseInt(product.quantity) === 0 ){
      DeleteItem(product.id)
    }
  })

  async function setMoreQuantity(e) {
    let id_panier = e.target.value.substring(21)
    axios("https://localhost:8000/api/panier_articles/" + id_panier)
      .then((response) => {
        let quantité = parseInt(response.data.quantity) + 1
        const configuration = { headers: { 'Content-Type': "application/merge-patch+json", Accept: "application/ld+json" } }
        axios.patch('https://localhost:8000/api/panier_articles/' + id_panier, { quantity: quantité }, configuration)
          .then((res) => {
            setArticle(article)
            setLength(length + 1);
          })
      })
  }

  async function setLessQuantity(e) {
    let id_panier = e.target.value.substring(21)
    axios("https://localhost:8000/api/panier_articles/" + id_panier)
      .then((response) => {
        let quantité = parseInt(response.data.quantity) - 1
        const configuration = { headers: { 'Content-Type': "application/merge-patch+json", Accept: "application/ld+json" } }
        axios.patch('https://localhost:8000/api/panier_articles/' + id_panier, { quantity: quantité }, configuration)
          .then((res) => {
            setArticle(article)
            setLength(length - 1);
          })
      })
  }

  return (
    <div>
      <header><Navbar /></header>
      <div className='contenairedetails'>
        {article.length > 0  ? article.filter(product => product.quantity > 0).map((item) => (
          <Card id={"produit-" + item.articles.id} key={article.indexOf(item)} className="card">
            <Card.Img className='card__img' src={item.articles.image} alt={item.articles.titre} />
            <Card.Body className='card__body'>
              <Link to={"/article/" + item.articles.id} className="link_none">
                <Card.Title className='card__title' >{item.articles.titre}</Card.Title>
              </Link>
              <Card.Subtitle className='card__size'>Taille : {item.size.name}</Card.Subtitle>
              <Card.Subtitle className='card__price'>{item.articles.prix}</Card.Subtitle>
              {item.articles.Promo === true ?
                <Card.Subtitle className='card__promo'>Promo !</Card.Subtitle>
                : null}
              <button id={"btn_"+item.articles.id} onClick={() => DeleteItem(item.id)}>&#x2716;</button>
              <input id={item["@id"]} type="text" value={item.quantity} readOnly></input>
              <button value={item["@id"]} onClick={(e) => setMoreQuantity(e)}>+</button>
              <button value={item["@id"]} onClick={(e) => setLessQuantity(e)}>-</button>
            </Card.Body>
          </Card>
        ))
          :
          <div>
            <p>Votre panier est vide.</p>
          </div>
        }
      </div>
      <p>total : {total}€</p>
      <Link className="btn-back" to={"/"}>Retour</Link>
    </div>
  );

}


export default Panier;
