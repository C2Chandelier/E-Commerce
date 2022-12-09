import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card_collection from '../card_collection/card_collection'

import BarreRecherche from '../Barre/barre'

export default function Navbar() {

  const [error, setError] = useState(false);
  const [categorie, setCategorie] = useState(null);





  useEffect(() => {
    axios("https://localhost:8000/api/categories")
      .then((response) => {
        setCategorie(response.data["hydra:member"])
        setError(null);
      })
      .catch(setError);

  }, []);
  if (error) return <p>An error occurred</p>

  return (
    <nav className="Navbar">
     {categorie ?
    
      <ul className="liste">
        <div className="divlogo1">
          <Link to={"/"}><img src="/images/Image_Navbar/logo.png" className="logo1" alt="costume" /></Link>
        </div>
        <li><Link to={"/result/categorie/" + categorie[0].id}>Costumes</Link></li>
        <li><Link to={"/result/categorie/" + categorie[1].id}>Chemises</Link></li>

        <li className="items" id="collection_btn">Collection <img className='fleche' src='/images/Image_Navbar/fleche-removebg-preview.png'></img><Card_collection /></li> 


        <li><Link to={"/"}><img className="logo2" src="/images/Image_Navbar/ajouter-au-panier.png" alt="costume" /></Link></li>
        <li><Link to={"/login"}><img className="logo2" src="/images/Image_Navbar/logoprofil.png" alt="costume" /></Link></li>
        <BarreRecherche></BarreRecherche>
      
      </ul>
    : null}
    </nav>
    
  )
}