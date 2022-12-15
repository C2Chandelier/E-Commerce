import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardCollection from '../card_collection/card_collection'
import BarreRecherche from '../Barre/barre'
import ButtonAdmin from '../admin/admin';
import Card from 'react-bootstrap/Card';

export default function Navbar() {

  const [error, setError] = useState(false);
  const [categorie, setCategorie] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const [product, setProduct] =useState(null)





  useEffect(() => {
    axios("https://localhost:8000/api/categories")
      .then((response) => {
        setCategorie(response.data["hydra:member"])
       
        setError(null);
      })
      .catch(setError);


      axios("https://localhost:8000/api/panier")
      .then((res)=>{
        setProduct(res.data["hydra:member"])
        
        setError(null);
      })
      .catch(setError);
  }, []);


  if (error) return <p>An error occurred</p>
  
  return (
    <><nav className="Navbar">
      <ButtonAdmin></ButtonAdmin>
      {categorie ?

        <ul className="liste">
          <div className="divlogo1">
            <Link to={"/"}><img src="/images/Image_Navbar/logo.png" className="logo1" alt="costume" /></Link>
          </div>
          <li><Link to={"/result/categorie/" + categorie[0].id}>Costumes</Link></li>
          <li><Link to={"/result/categorie/" + categorie[1].id}>Chemises</Link></li>

          <li className="items" id="collection_btn">Collection <img className='fleche' src='/images/Image_Navbar/fleche-removebg-preview.png' alt="fleche"></img><CardCollection /></li>


          <li onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}><Link to={"/panier"}><img className="logo2" src="/images/Image_Navbar/ajouter-au-panier.png" alt="costume" /></Link></li>
          <li>

          </li>
          <li><Link to={"/login"}><img className="logo2" src="/images/Image_Navbar/logoprofil.png" alt="costume" /></Link></li>

          <BarreRecherche></BarreRecherche>

        </ul>
        : null}

    </nav>
      {isShown ? (
        <div className='contenuPanier'>
             {product.map((item)=>(
                    // <a href="#">{item.titre}</a>
                    <>
                <div className='imageCd'>
                <Link to={"/article/" + item.id} className="link_none">
              <Card.Img className='searchCard__img' src={item.image} alt={item.titre}  />
              </Link>
              </div>
              <div className='bodyCd'>
              <Card id={"produit-" + item.id} key={item.id} className="searchCadre" >
                <Link to={"/article/" + item.id} className="link_none">

                  <Card.Body className='searchCard__body'>
                    <Card.Title className='searchCard__title'>{item.titre}</Card.Title>
                    <Card.Subtitle className='searchCard__price'>{item.prix}</Card.Subtitle>
                  </Card.Body>
                </Link>

              </Card>
              </div></>

          ))}
        </div>
      ) : null}
    </>
    
    
  )
}