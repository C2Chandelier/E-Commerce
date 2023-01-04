import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../../NavbarComponent/Navbar/ Navbar";
import Card from 'react-bootstrap/Card';
import Cookies from 'universal-cookie';



export default function RecapVisiteur() {
    let quantityTotal = 0;
    let total = 0;
    const cookies = new Cookies();
    const utilisateur = cookies.get('utilisateur')
    const articles = cookies.get('article')

    articles.map((item) => {
        quantityTotal = quantityTotal + 1 * parseInt(item.quantity)
  
        item.Promo === true ?
  
          total = total + (parseFloat(item.prix) * (1 - parseFloat(item.Reduction) / 100)) * parseInt(item.quantity)
          :
          total = total + parseFloat(item.prix) * parseInt(item.quantity)
  
      })

    cookies.remove('article')

    return (
        <div>
            <header><Navbar /></header>
            <div className='containeur'>
                {articles.map((item) => (
                    <Card id={"produit-" + item.id} key={articles.indexOf(item)} className="card">
                        <Card.Img className='card__img' src={item.image} alt={item.titre} />
                        <Card.Body className='card__body'>
                            <Link to={"/article/" + item.id} className="link_none">
                                <Card.Title className='card__title' >{item.titre}</Card.Title>
                            </Link>
                            {item.size === 1 ? <Card.Subtitle className='card__size'>Taille : S x {item.quantity}</Card.Subtitle> : null}
                            {item.size === 2 ? <Card.Subtitle className='card__size'>Taille : M x {item.quantity}</Card.Subtitle> : null}
                            {item.size === 3 ? <Card.Subtitle className='card__size'>Taille : L x {item.quantity}</Card.Subtitle> : null}
                            {item.size === 4 ? <Card.Subtitle className='card__size'>Taille : XL x {item.quantity}</Card.Subtitle> : null}
                            {item.size === undefined ? <Card.Subtitle className='card__quantity'>x {item.quantity}</Card.Subtitle> : null}
                            {item.quantity === 1 && item.Promo === false ?
                                <Card.Subtitle className='card__price'>{item.prix}</Card.Subtitle>
                                :
                                null
                            }
                            {item.quantity !== 1 && item.Promo === false ?
                                <Card.Subtitle className='card__price'>{(item.prix * item.quantity).toFixed(2)}</Card.Subtitle>
                                :
                                null
                            }
                            {item.Promo === true && item.quantity === 1 ?
                                <div>
                                    <Card.Subtitle className='card__newprice'>{(parseFloat(item.prix) * (1 - parseFloat(item.Reduction) / 100)).toFixed(2)}</Card.Subtitle>
                                </div>
                                :
                                null
                            }
                            {item.Promo === true && item.quantity !== 1 ?
                                <div>
                                    <Card.Subtitle className='card__newprice'>{(parseFloat(item.prix) * (1 - parseFloat(item.Reduction) / 100) * item.quantity).toFixed(2)}</Card.Subtitle>
                                </div>
                                :
                                null
                            }
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <p id="totalarticle">{quantityTotal} Articles : {total.toFixed(2)}€</p>
            <p id="totalTTC">Total TTC : {(parseFloat(total) + parseFloat(utilisateur.frais)).toFixed(2)}€</p>
            <Link to={'/'}>Revenir à l'accueil</Link>
        </div>
    )
}