import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../../NavbarComponent/Navbar/ Navbar";
import Card from 'react-bootstrap/Card';
import Cookies from 'universal-cookie';
import axios from "axios";



export default function RecapVisiteur() {
    let quantityTotal = 0;
    let total = 0;
    const cookies = new Cookies();
    const utilisateur = cookies.get('utilisateur')
    const articles = cookies.get('article')
    const location = useLocation()
    const frais = location.state
    console.log(articles)
    const montant = parseFloat(utilisateur.frais) + parseFloat(frais.prix)
    const [numero, setNumero] = useState("")

    useEffect(() => {
        let alph = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let numero = ''
        for (let i = 0; i < 8; i++) {
            numero += alph[Math.floor(Math.random() * 46)]
        }
        setNumero(numero)
        const configuration = { headers: { 'Content-Type': "application/json", Accept: "application/ld+json" } }
        axios.post('https://localhost:8000/api/commandes', {
            "numero": numero,
            "montant": String(montant)
        }, configuration)
            .then((res) => {
                const apicommande = res.data['@id'].substring(1)
                for (let i = 0; i < articles.length; i++) {
                    axios.post('https://localhost:8000/api/commande_articles', {
                        "commande": apicommande,
                        "articles": articles[i]['@id'].substring(1),
                        "quantity": String(articles[i].quantity),
                        "size": "api/sizes/" + articles[i].size
                    })
                }
            })

        for (let i = 0; i < articles.length; i++) {
            const id_size = "api/sizes/" + frais.data[i].size
            const id_article = frais.data[i].id
            console.log(id_size, id_article)
            axios.get('https://localhost:8000/api/stocks?articles=' + id_article + '&size=' + id_size)
                .then((reponse) => {
                    const quantite = parseInt(frais.data[i].quantity)
                    const id_stock = reponse.data['hydra:member'][0].id
                    const NBStock = parseInt(reponse.data['hydra:member'][0].NBStock) - quantite
                    const configuration = { headers: { 'Content-Type': "application/merge-patch+json", Accept: "application/ld+json" } }
                    const apiArticle = frais.data[i]["@id"]
                    axios.patch('https://localhost:8000/api/stocks/' + id_stock, { "NBStock": NBStock }, configuration)
                    axios.get('https://localhost:8000' + apiArticle)
                        .then((ress) => {
                            const StockTotal = String(ress.data.nbStock - quantite)
                            console.log(apiArticle)
                            axios.patch('https://localhost:8000' + apiArticle, { "nbStock": StockTotal }, configuration)
                        })
                })
        }

    }, []);


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
            <h1>Merci pour votre commande !</h1>
            <h2>Recapitulatif de commande</h2>
            <h3>Votre commande numero : {numero}</h3>
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
            <p id="totallivraison">Livraison : {utilisateur.frais}</p>
            <p id="totalTTC">Total TTC : {(parseFloat(total) + parseFloat(utilisateur.frais)).toFixed(2)}€</p>
            <Link to={'/'}>Revenir à l'accueil</Link>
        </div>
    )
}
