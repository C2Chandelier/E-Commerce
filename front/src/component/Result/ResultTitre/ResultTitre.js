import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ResultTitre.css";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../NavbarComponent/Navbar/ Navbar"
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Sidebar from "../sidebar/SideBar";
import ArianneResult from "../filArianne/ArianneResult";

function ResultSearch() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  let categorie = [];
  let souscategorie = [];


  const path = useLocation().pathname.substring(
    useLocation().pathname.lastIndexOf("/") + 1
  );

  useEffect(() => {
    axios
      .get("https://localhost:8000/api/articles?titre=" + path)

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
  
  product.map((element) => {
    categorie.push(element["categorie"])
    if(element["souscategorie"] !== undefined){
      souscategorie.push(element["souscategorie"])
    }
  });

  return (
    <div>
      <header className="navResult"><Navbar /></header>
      <ArianneResult></ArianneResult>
      <div className="container-product">
        <div className="SideBarResult"><Sidebar
        titre={path} 
        cat={categorie}
        souscat={souscategorie}
        /></div>

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
                {item.Promo === true ?
                  <Card.Subtitle className='card__promo'>Promo !</Card.Subtitle>
                  : null}
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
