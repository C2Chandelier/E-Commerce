import { Link } from 'react-router-dom'
import React from 'react'
import './panierHover.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function PanierHover() {

  const [error, setError] = useState(false);
  const [article, setArticle] =useState([]);
 





  useEffect(() => {
      let id_panier = "api/paniers/" + localStorage.getItem('id_panier');
      axios("https://localhost:8000/api/panier_articles?panier=" + id_panier)
          .then((res)=>{
        setArticle(res.data["hydra:member"])       
        setError(null);
      })
      .catch(setError);
  }, []);


  if (error) return <p>An error occurred</p>
  let totale = [];
  article.forEach(item=>{
    totale.push(item.articles.prix)
  })

  let compt = 0;
  for(let i=0; i<totale.length; i++){
    compt += Number(totale[i]);
  }
  
  return (
    <>

        
        <div className='contenuPanier'  >
    
                   <>
                    <>
                {article.length > 0 ? article.map((item) => (
                  <><div className='imgPanier'>
                    <Link to={"/article/" + item.articles.id} className="link_none">
                    <Card.Img className='panierCard__img' src={item.articles.image} alt={item.articles.titre} />
                    </Link>
                  </div>
                  <div className='bodyPanier'>
                  <Card id={"produit-" + item.articles.id} key={article.indexOf(item)} className="MainCard">

                      <Card.Body className='panierCard__body'>
                        <Link to={"/article/" + item.articles.id} className="link_none">
                          <Card.Title className='panierCard__title'>{item.articles.titre}</Card.Title>
                        </Link>
                        <Card.Subtitle className='panierCard__price'>{item.articles.prix}€</Card.Subtitle>
                        <Card.Subtitle className='panierCard__quantity'>Q:{item.quantity}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    </div>
                    </>
        ))

          :
          <div>
            <p className='vide'>Votre panier est vide.</p>
          </div>
        }
              </>
          
          </>
          <div className='total'>
              <p>Votre Total : {compt}€</p>
              <Link to={"/panier/"} className="link_none">

            <button>Voir le panier</button>
              </Link>
          </div>
        </div>
   
       
     

    </>
  )
}