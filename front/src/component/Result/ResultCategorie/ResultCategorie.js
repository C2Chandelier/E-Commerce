import axios from "axios";
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Navbar from "../../NavbarComponent/Navbar/ Navbar";
import ArianneResult from "../filArianne/ArianneResult";
import Sidebar from "../sidebar/SideBar";


export default function ResultCategorie() {

    const [error, setError] = useState(null);
    const [product, setProduct] = useState([]);
    const path = useParams()


    useEffect(() => {
        axios("https://localhost:8000/api/articles?categorie=" + path.id)
            .then((response) => {
                setProduct(response.data["hydra:member"])
                setError(null);
            })
            .catch(setError);

    }, [path]);
    if (error) return <p>An error occurred</p>

    return (
        <div>
            <header className="navResult"><Navbar /></header>
            <ArianneResult></ArianneResult>
            <div className='container-product'>
                <div className="SideBarResult"><Sidebar /></div>

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