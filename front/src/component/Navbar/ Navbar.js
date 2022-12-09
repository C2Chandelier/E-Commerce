import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Navbar() {

  const [error, setError] = useState(null);
  const [categorie, setCategorie] = useState([]);
  const [categorieId] = useState([]);
  const [SousCategorie, setSousCategorie] = useState([]);
  const [SouscategorieId] = useState([]);




  useEffect(() => {
    axios("https://localhost:8000/api/categories")
      .then((response) => {
        setCategorie(response.data["hydra:member"])
        setError(null);
      })
      .catch(setError);

      axios("https://localhost:8000/api/souscategories")
      .then((res) => {
        setSousCategorie(res.data["hydra:member"])
        setError(null);
      })
      .catch(setError);

  }, []);
  if (error) return <p>An error occurred</p>

  return (
    <nav className="Navbar">
    {categorie.map((item) => (
      categorieId.push(item.id)
    ))};
    {SousCategorie.map((item) => (
      SouscategorieId.push(item.id)
    ))};
      <ul className="liste">
        <div className="divlogo1">
          <Link to={"/"}><img src="/images/Image_Navbar/logo.png" className="logo1" alt="costume" /></Link>
        </div>
        <li><Link to={"/result/categorie/" + categorieId[0]}>Costumes</Link></li>
        <li><Link to={"/result/categorie/" + categorieId[1]}>Chemises</Link></li>
        <li><Link to={"/result/categorie/" + categorieId[2]}>Vêtements</Link></li>

        <li><Link to={"/result/souscategorie/" + SouscategorieId[0]}>cravate</Link></li>
        <li><Link to={"/result/souscategorie/" + SouscategorieId[1]}>chaussures</Link></li>
        <li><Link to={"/result/souscategorie/" + SouscategorieId[2]}>ceinture</Link></li>
        <li><Link to={"/result/souscategorie/" + SouscategorieId[3]}>pantalon</Link></li>
        <li><Link to={"/result/souscategorie/" + SouscategorieId[4]}>gilet</Link></li>
        <li><Link to={"/result/souscategorie/" + SouscategorieId[5]}>Veste</Link></li>
        <li><Link to={"/result/souscategorie/" + SouscategorieId[6]}>pull</Link></li>

        <li><Link to={"/"}><img className="logo2" src="/images/Image_Navbar/ajouter-au-panier.png" alt="costume" /></Link></li>
        <li><Link to={"/login"}><img className="logo2" src="/images/Image_Navbar/logoprofil.png" alt="costume" /></Link></li>
      </ul>
    </nav>
  )
}
