import { Link } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function PanierQuantity() {
    const [error, setError] = useState(false);
    const [article, setArticle] =useState([]);
  
    
 
  useEffect(() => {


      let id_panier = "api/paniers/" + localStorage.getItem('id_panier');
      axios("https://localhost:8000/api/panier_articles?panier=" + id_panier)
          .then((res)=>{
        setArticle(res.data["hydra:member"])
        // console.log(res);
        
        setError(null);
      })
      .catch(setError);
  }, []);


  if (error) return <p>An error occurred</p>
  let totale = [];
  article.forEach(item=>{
    totale.push(item.quantity)
  })
  console.log("totale:", totale)
  let comptQuantity = 0;
  for(let i=0; i<totale.length; i++){
    comptQuantity += Number(totale[i]);
  }
  console.log(comptQuantity);

  return(
    <>
    {comptQuantity > 0 && comptQuantity
        
    }</>
  )
}