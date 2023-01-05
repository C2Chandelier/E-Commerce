import React from "react";
import "./commandes.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../NavbarComponent/Navbar/ Navbar";
export default function HistoriqueCommandes() {
  const [article, setArticle] = useState([]);
  let prixPromoFinal = 0;
  let id_user = localStorage.getItem("id");
  useEffect(() => {
    if (id_user !== null) {
      axios
        .get("https://127.0.0.1:8000/api/commandes?user=" + id_user)
        .then((response) => {
          console.log("THISSS:", response.data["hydra:member"]);
          setArticle(response.data["hydra:member"]);
        });
    }
  }, []);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="mainHistorique">
        <h1 className="titreHistorique">Vos Commandes</h1>
        <div className="bodyHistorique">
          {article.map((item) => (
            <div className="bodyElementHistorique">
              <p className="cmdNumero">Commande Numéro : {item.numero}</p>
              <p className="statutLivraison">Statut de livraison : Livré</p>
              {item.commandeArticles.map((element) => (
                <div className="element">
                  <div className="imageDivElem">
                    <img className="elemImage" src={element.articles.image} />
                  </div>
                  <div className="detailDivElem">
                    <p>{element.articles.titre}</p>
                    <p>Qantité:{element.quantity}</p>
                    {element.articles.Promo === true ? (
                      <p className="promoPrix">Prix : {
                          (prixPromoFinal = (
                            parseFloat(element.articles.prix) *
                            (1 - parseFloat(element.articles.Reduction) / 100) *
                            parseInt(element.quantity)
                          ).toFixed(2))
                        }
                        €
                      </p>
                    ) : (
                      <p>Prix : {element.articles.prix}€</p>
                    )}
                  </div>
                </div>
              ))}
              <p className="dateHistorique">{item.date.substring(0, 10)}</p>
              <p className="totalHistorique">Total: {item.montant}€</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}