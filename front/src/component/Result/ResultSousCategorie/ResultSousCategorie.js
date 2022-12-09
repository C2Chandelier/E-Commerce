import axios from "axios";
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link,useParams } from 'react-router-dom';
import Navbar from "../../NavbarComponent/Navbar/ Navbar";
import ArianneResult from "../filArianne/ArianneResult";



export default function ResultSousCategorie() {

    const [error, setError] = useState(null);
    const [product, setProduct] = useState([]);
    const path = useParams()

    useEffect(() => {
        axios("https://localhost:8000/api/articles?souscategorie=" + path.id)
            .then((response) => {
                setProduct(response.data["hydra:member"])
                setError(null);
            })
            .catch(setError);

    }, [path]);
    if (error) return <p>An error occurred</p>

    
    return (
        <div>
        <Navbar></Navbar>
        <ArianneResult></ArianneResult>
        <div className='container-product'>
            {product.map((item) => (
                <Link to={"/article/" + item.id} key={item.id}>
                    <Card id={"produit-" + item.id} className="card">
                        <Card.Img className='card__img' src={item.image} alt={item.titre} />
                        <Card.Body className='card__body'>
                            <Card.Title className='card__title'>{item.titre}</Card.Title>
                            <Card.Subtitle className='card__price'>{item.prix}</Card.Subtitle>
                            <Card.Text className='card__description'>
                                {item.description.substring(0, 20) + "..."}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            ))};
        </div>
        </div>
    );
}