import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ResultTitre.css";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Navbar/ Navbar";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

function ResultSearch() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);

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

  return (
    <div>
      <header className="navResult">
        <Navbar />
      </header>
      <div className="container-product div-product">
        <div className="sideBarre">
          <h1 className="t-name">Cotumichioo</h1>
          <hr className="t-hr"></hr>
          <div className="divSelect">
            {/* <select>
              <option value="0">Categorie:</option>
              <option value="1">Costumes</option>
              <option value="2">Chemise</option>
              <option value="3">Accéssoires</option>
            </select>

            <select>
              <option value="0">Vêtements:</option>
              <option value="1">Veste</option>
              <option value="2">Gilet</option>
              <option value="3">Gilet</option>
            </select> */}

            <div class="user-box">
              <div class="user-id">
                <div class="user-name">Catégorie</div>
                <div class="dropdown-arrow"></div>
                <div class="dropdown-menu">
                  <ul>
                    <li>Costumes</li>
                    <li>Chemise</li>
                    <li>Vêtements</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="user-box">
              <div class="user-id">
                <div class="user-name">Vêtements</div>
                <div class="dropdown-arrow"></div>
                <div class="dropdown-menu">
                  <ul>
                    <li>Veste</li>
                    <li>Gilet</li>
                    <li>Gilet</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="user-box">
              <div class="user-id">
                <div class="user-name">Accéssoires</div>
                <div class="dropdown-arrow"></div>
                <div class="dropdown-menu">
                  <ul>
                    <li>Ceinture</li>
                    <li>Cravate</li>
                    <li>Pull</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {product.length > 0 ? (
          product.map((item) => (
            <>
              <Link to={"/article/" + item.id} key={item.id}>
                <Card id={"produit-" + item.id} className="card">
                  <Card.Img
                    className="card__img"
                    src={item.image}
                    alt={item.titre}
                  />
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
            </>
          ))
        ) : (
          <div className="messageErreur">
            <p className="">
              Aucun article ne correspond à votre recherche{" "}
              <SentimentVeryDissatisfiedIcon className="sad" />
            </p>
            <Link to={"/"} className="retourLink">
              Retour à l'accueil
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default ResultSearch;
