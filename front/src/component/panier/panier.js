import React from 'react'
import { useState, useEffect } from 'react';
import './panier.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Navbar from '../NavbarComponent/Navbar/ Navbar';
import { speedDialIconClasses } from '@mui/material';

function Panier() {
    const [article, setArticle] = useState([]);
    const [array, setArray] = useState([]);
    let total = 0;
    
  useEffect(() => {
    if(localStorage.getItem("id_panier")!==null){
      axios.get("https://localhost:8000/api/panier_articles?panier="+localStorage.getItem("id_panier"))
      .then((response) => {
          setArticle(response.data["hydra:member"]);
       
      })
    }
  }, []);

  article.map((item)=>{
    
    total = total+parseFloat(item.articles.prix);
  })

  function DeleteItem(e){
    
    //console.log(e.target.id)
    const id_article = e.target.id.substring(4)
   // console.log(id_article)
    article.map((item)=>{                                       //LAIL FAUT ENLEVER LE .MAP ET FAIRE UN FILTER
     // console.log(item.articles.id)//LAIL FAUT ENLEVER LE .MAP ET FAIRE UN FILTER
      if(item.articles.id == id_article)//LAIL FAUT ENLEVER LE .MAP ET FAIRE UN FILTER
      {   //LAIL FAUT ENLEVER LE .MAP ET FAIRE UN FILTER
        article.splice(article.indexOf(item),1);
        axios.delete('https://localhost:8000'+item["@id"])
        //setArray(article)
        // setArticle([]);
      }
    })
    
  }
  
  return (
    <div>
        <header><Navbar/></header>
        <div className='contenairedetails'>
        {article.length > 0 ? article.map((item) => (  
            <Card id={"produit-" + item.articles.id}  key={article.indexOf(item)} className="card">
              <Card.Img className='card__img' src={item.articles.image} alt={item.articles.titre} />
              <Card.Body className='card__body'> 
                <Link to={"/article/" + item.articles.id} className="link_none">
                    <Card.Title className='card__title' >{item.articles.titre}</Card.Title>
                </Link>
                <Card.Subtitle className='card__price'>{item.articles.prix}</Card.Subtitle>
                <select>
                  <option value="grapefruit">{item.quantity}</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
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
