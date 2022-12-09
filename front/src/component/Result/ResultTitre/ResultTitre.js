import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ResultTitre.css"
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../NavbarComponent/Navbar/ Navbar";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function ResultSearch() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  const path = useLocation().pathname.substring(
    useLocation().pathname.lastIndexOf("/") + 1
  );

  useEffect(() => {

    axios.get("https://localhost:8000/api/articles?titre=" + path)

      .then((response) => {
        setProduct(response.data["hydra:member"]);
        setError(null);
      })
      .catch(setError);
  }, [path]);
  if (error) return <p>An error occurred</p>;

  if (product === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <header className="navResult"><Navbar /></header>
      <div className="container-product">

        {product.length > 0 ? product.map((item) => (

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
                <Card.Text className="card__description">
                  {item.description.substring(0, 20) + "..."}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))
          :

          <div className="messageErreur"><p className="">Aucun article ne correspond à votre recherche <SentimentVeryDissatisfiedIcon className="sad" /></p>
            <Link to={"/"} className='retourLink'>Retour à l'accueil</Link>
          </div>}
      </div>
    </div>

  );
}
export default ResultSearch;