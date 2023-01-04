import React, { useState,useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../NavbarComponent/Navbar/ Navbar";
import Card from 'react-bootstrap/Card';
import axios from "axios";



export default function RecapCommande() {
    const location = useLocation()
    const frais = location.state
    let id_panier = localStorage.getItem("id_panier")
    const [id_delete, setId_delete] = useState(null)
    console.log(frais.articles)

    let quantityTotal = 0;

    frais.articles.map((item) => (
        quantityTotal = quantityTotal + 1 * parseInt(item.quantity)
    ))

    /* useEffect(() => {
        axios.get("https://localhost:8000/api/panier_articles?panier=" + id_panier)
            .then((response) => {
                setId_delete(response.data["hydra:member"])
            })
    }, []);

    if(id_delete !== null){
        id_delete.map((item) => {
            axios.delete("https://localhost:8000/api/panier_articles/"+item.id)
        })
    } */

    return (
        <div>
            <header><Navbar /></header>
            <div className='contenairedetails'>
            {frais.articles.map((item) => (
                 <Card id={"produit-" + item.articles.id} key={item.id} className="card">
                    <Link to={"/article/" + item.articles.id} className="link_none">
                        <Card.Img className='card__img' src={item.articles.image} alt={item.articles.titre} />
                    </Link>

                    <Card.Body className='card__body'>
                        <Card.Title className='card__title' >{item.articles.titre}</Card.Title>
                        {item.size === undefined ? <Card.Subtitle className='card__quantity'>x {item.quantity}</Card.Subtitle> : null}
                        <Card.Subtitle className='card__size'>Taille : {item.size.name} x {item.quantity}</Card.Subtitle>

                        {item.quantity === 1 && item.articles.Promo === false ?
                            <Card.Subtitle className='card__price'>{item.articles.prix}</Card.Subtitle>
                            :
                            null
                        }
                        {item.quantity !== 1 && item.articles.Promo === false ?
                            <Card.Subtitle className='card__price'>{(item.articles.prix * item.quantity).toFixed(2)}</Card.Subtitle>
                            :
                            null
                        }
                        {item.articles.Promo === true && item.quantity === 1 ?
                            <div>
                                <Card.Subtitle className='card__newprice'>{(parseFloat(item.articles.prix) * (1 - parseFloat(item.articles.Reduction) / 100)).toFixed(2)}</Card.Subtitle>
                            </div>
                            :
                            null
                        }
                        {item.articles.Promo === true && item.quantity !== 1 ?
                            <div>
                                <Card.Subtitle className='card__promo'>Promo !</Card.Subtitle>
                                <Card.Subtitle className='card__reduc'>{item.articles.Reduction}%</Card.Subtitle>
                                <Card.Subtitle className='card__newprice'>{(parseFloat(item.articles.prix) * (1 - parseFloat(item.articles.Reduction) / 100) * item.quantity).toFixed(2)}</Card.Subtitle>
                            </div>
                            :
                            null
                        }
                    </Card.Body>
                </Card>
                    ))}
            </div>
            <p id="totalarticle">{quantityTotal} Articles : {frais.total}€</p>
            <p id="totalTTC">Total TTC : {(parseFloat(frais.total) + parseFloat(frais.fraistotal)).toFixed(2)}€</p>
        </div>
    )
}