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
  const [articlevide, setArticlevide] = useState([]);
  const [PrixPays, setPrixPays] = useState(0);
  const [PrixPoid, setPrixPoid] = useState(0)

  let total = 0;
  let weight = 0;
  let quantityTotal = 0;
  let weighttotal = parseFloat(PrixPays) + parseFloat(PrixPoid);
  let id_panier = localStorage.getItem("id_panier")

  useEffect(() => {
    if (id_panier !== null) {
      axios.get("https://localhost:8000/api/panier_articles?panier=" + id_panier)
        .then((response) => {
          if (response.data["hydra:totalItems"] === 0) {
            axios.get("https://localhost:8000/api/articles")
              .then((res) => {
                setArticlevide(res.data["hydra:member"])
              })
          }
          setArticle(response.data["hydra:member"]);
        })

    }
  }, [id_panier, length]);

  article.map((item) => {

    total = total + parseFloat(item.articles.prix) * parseInt(item.quantity);
    weight = weight + parseFloat(item.articles.Poid) * parseInt(item.quantity);
    quantityTotal = quantityTotal + 1 * parseInt(item.quantity)
  })
  total = total.toFixed(2)
  weight = weight.toFixed(1)
  weight = parseFloat(weight)
  weight = Math.round(weight)
  if(weight > 6){
    weight = 6
  }

  if(article.length > 0){
    let country = article[0]['panier']['user'].Pays
    axios("https://localhost:8000/api/pays?pays=" + country)
      .then((res) => {
        if(res.data["hydra:totalItems"] !== 0){
          setPrixPays(res.data["hydra:member"][0].prix)
        }
        else{
          axios("https://localhost:8000/api/pays?pays=autre")
            .then((resp) => {
              setPrixPays(resp.data["hydra:member"][0].prix)
            })
        }
        axios('https://localhost:8000/api/poids?poid='+weight)
          .then((response) => {
            setPrixPoid(response.data["hydra:member"][0].prix)
          })
      })
  }


  async function DeleteItem(id) {
    const id_panier = id
    article.filter((res) => {
      if (parseInt(res.id) === parseInt(id_panier)) {
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
    if (parseInt(product.quantity) === 0) {
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

  const element = articlevide.splice(0, 3);
  return (
    <div>
      <header><Navbar /></header>
      <div className='contenairedetails'>
        {article.length > 0 ? article.filter(product => product.quantity > 0).map((item) => (
          <Card id={"produit-" + item.articles.id} key={article.indexOf(item)} className="card">
            <Card.Img className='card__img' src={item.articles.image} alt={item.articles.titre} />
            <Card.Body className='card__body'>
              <Link to={"/article/" + item.articles.id} className="link_none">
                <Card.Title className='card__title' >{item.articles.titre}</Card.Title>
              </Link>
              <Card.Subtitle className='card__size'>Taille : {item.size.name}</Card.Subtitle>
              {item.quantity === 1 ?
                <Card.Subtitle className='card__price'>{item.articles.prix}</Card.Subtitle>
                :
                <Card.Subtitle className='card__price'>{(item.articles.prix * item.quantity).toFixed(2)}</Card.Subtitle>
              }
              {item.articles.Promo === true ?
                <Card.Subtitle className='card__promo'>Promo !</Card.Subtitle>
                : null}
              <button id={"btn_" + item.articles.id} onClick={() => DeleteItem(item.id)}>&#x2716;</button>
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
      <p id="totalarticle">{quantityTotal} Articles : {total}€</p>
      {article.length > 0 ? 
      <div>
      <p id="totalfrais">Livraison à partir de : {weighttotal}€</p>
      <p id="totalTTC">Total TTC :{parseFloat(total + weighttotal).toFixed(2)}€</p>
      <Link to={"/paiement"}>Passer commande</Link> 
      </div>
      : null}
      <Link className="btn-back" to={"/"}>Retour</Link>
      <div className='contenairedetails'>
        {element.map((item) => (
          <Link to={"/article/" + item.id} key={item.id} className="link_none">
            <Card id={"produit-" + item.id} className="card">
              <Card.Img className='card__img' src={item.image} alt={item.titre} />
              <Card.Body className='card__body'>
                <Card.Title className='card__title' >{item.titre}</Card.Title>
                <Card.Subtitle className='card__price'>{item.prix}</Card.Subtitle>
                {item.Promo === true ?
                  <Card.Subtitle className='card__promo'>Promo !</Card.Subtitle>
                  : null}
              </Card.Body>
            </Card>
          </Link>


        ))}

      </div>
    </div>
  );

}


export default Panier;
