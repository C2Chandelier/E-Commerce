import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../NavbarComponent/Navbar/ Navbar"
import ArianneResult from "../filArianne/ArianneResult";

export default function ResultFilter() {
    const [error, setError] = useState(null);
    const [product, setProduct] = useState(null);

    const path = useLocation().pathname.split("/");
    const titre = path[2];
    const cat = path[3];
    const id = path[4];

    useEffect(() => {
        if (cat === "CAT") {
            axios
                .get("https://localhost:8000/api/articles?categorie=" + id + "&titre=" + titre)

                .then((response) => {
                    setProduct(response.data["hydra:member"]);
                    setError(null);
                })
                .catch(setError);
        }
        if (cat === "SCAT") {
            axios
                .get("https://localhost:8000/api/articles?souscategorie=" + id + "&titre=" + titre)

                .then((response) => {
                    setProduct(response.data["hydra:member"]);
                    setError(null);
                })
                .catch(setError);
        }
    }, [cat, id, titre]);
    if (error) return <p>An error occurred</p>;

    return (
        <div>
            <header className="navResult"><Navbar /></header>
            <ArianneResult></ArianneResult>
            <div className="container-product">
            {product !== null ? product.map((item) => (

                <Link to={"/article/" + item.id} key={item.id}>
                    <Card id={"produit-" + item.id} className="card">
                        <Card.Img
                            className="card__img"
                            src={item.image}
                            alt={item.titre} />
                        <Card.Body className="card__body">
                            <Card.Title className="card__title">
                                {item.titre}
                            </Card.Title>
                            <Card.Subtitle className="card__price">
                                {item.prix}
                            </Card.Subtitle>
                            {item.Promo === true ?
                                <Card.Subtitle className='card__promo'>Promo !</Card.Subtitle>
                                : null}
                        </Card.Body>
                    </Card>
                </Link>
            ))
        :null}
            </div>
        </div>
    )
}