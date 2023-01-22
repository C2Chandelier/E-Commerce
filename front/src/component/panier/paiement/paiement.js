import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './paiement.css';
import Navbar from '../../NavbarComponent/Navbar/ Navbar';


export default function Paiement() {
  const [carte, setCarte] = useState("");
  const [cvc, setCvc] = useState("");
  const [date, setDate] = useState("");
  const [livraison, setLivraison] = useState("");
  const [fraistotal, setFraistotal] = useState(0);
  const [tariflivraison, setTariflivraison] = useState([])
  const [knownPaye, setKnownPaye] = useState(false)
  const [articles,setArticles] =useState(useLocation().state.data)
  const [frais, setFrais] = useState(useLocation().state.frais)
  const PrixPoid = useLocation().state.poid
  const total = useLocation().state.prix
  const [paiement, setPaiement] = useState(null);
  const navigate = useNavigate();
  const [livraisonSelect, setLivraisonSelect] = useState(0)
  const [knownAdresse, setKnownAdresse] = useState(true)
  const [adresse, setAdresse] = useState("");
  const [adressebis, setAdressebis] = useState("");
  const [ville, setVille] = useState("");
  const [pays, setPays] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [userAdresse, setUserAdresse] = useState("");
  const [checked, setCheked] = useState(false)
  const [user_id, setUser_id] = useState("");
  const from = useLocation().state.from;
  const id_panier = localStorage.getItem('id_panier')

  const id_user = localStorage.getItem('id')

  useEffect(() => {
    axios('https://localhost:8000/api/users/' + id_user)
      .then((response) => {
        setUser_id(response.data['@id'])
        setUserAdresse(response.data.Adresse)
        if (response.data.paiement !== undefined) {
          setPaiement(response.data.paiement)
          setKnownPaye(true)
        }
      })
    if(from === "login"){
      axios.get("https://localhost:8000/api/panier_articles?panier=" + id_panier)
        .then((res)=>{
          setArticles(res.data["hydra:member"])
        })
    }
    axios('https://localhost:8000/api/livraisons')
      .then((res) => {
        setTariflivraison(res.data['hydra:member'])
      })
  }
    , [fraistotal])

  function radiochange(e) {
    setLivraison(e.target.value,);
    axios.get('https://localhost:8000/api/livraisons?methode=' + e.target.value)
      .then((res) => {
        setLivraisonSelect(parseFloat(res.data['hydra:member'][0].prix))
      })
  }

  function commande(e) {
    e.preventDefault()
    if (knownPaye === true && knownAdresse === true) {
      if (livraison === "") {
        alert("Veuillez choisir un mode de livraison")
      }
      else {
        axios.get('https://localhost:8000/api/livraisons?methode=' + livraison)
          .then((res) => {
            setFraistotal(parseFloat(frais) + parseFloat(res.data['hydra:member'][0].prix))
          })
      }
    }

    if (knownPaye !== true && knownAdresse === true) {
      if (carte === "" || cvc === "" || livraison === "" || date === "") {
        alert("Veuillez renseigner tous les champs")
      }
      else {
        axios.get('https://localhost:8000/api/livraisons?methode=' + livraison)
          .then((res) => {
            setFraistotal(parseFloat(frais) + parseFloat(res.data['hydra:member'][0].prix))
          })
      }
      if (checked === true) {
        const configuration = { headers: { 'Content-Type': "application/json", Accept: "application/ld+json" } }
        axios.post('https://localhost:8000/api/paiements', {
          "user": user_id,
          "carte": carte,
          "CVC": cvc,
          "date": date
        }, configuration)
      }
    }

    if (knownAdresse !== true && knownPaye === true) {
      if (adresse === "" || ville === "" || pays === "" || zipcode === "") {
        alert("Veuillez renseigner tous les champs")
      }
      else {
        axios.get('https://localhost:8000/api/pays?pays=' + pays)
          .then((res) => {
            if (res.data["hydra:totalItems"] !== 0) {
              let fraisPays = (parseFloat(res.data['hydra:member'][0].prix))
              axios.get('https://localhost:8000/api/livraisons?methode=' + livraison)
                .then((res) => {
                  setFraistotal(fraisPays + parseFloat(PrixPoid) + parseFloat(res.data['hydra:member'][0].prix))
                  setFrais(fraisPays + parseFloat(PrixPoid))
                })
            }
            else {
              axios.get('https://localhost:8000/api/pays?pays=autre')
                .then((res) => {
                  let fraisPays = (parseFloat(res.data['hydra:member'][0].prix))
                  axios.get('https://localhost:8000/api/livraisons?methode=' + livraison)
                    .then((res) => {
                      setFraistotal(fraisPays + parseFloat(PrixPoid) + parseFloat(res.data['hydra:member'][0].prix))
                      setFrais(fraisPays + parseFloat(PrixPoid))
                    })
                })
            }
          })
      }
    }

    if (knownAdresse !== true && knownPaye !== true) {
      if (carte === "" || cvc === "" || livraison === "" || date === "" || adresse === "" || ville === "" || pays === "" || zipcode === "") {
        alert("Veuillez renseigner tous les champs")
      }
      else {
        axios.get('https://localhost:8000/api/pays?pays=' + pays)
          .then((res) => {
            if (res.data["hydra:totalItems"] !== 0) {
              let fraisPays = (parseFloat(res.data['hydra:member'][0].prix))
              axios.get('https://localhost:8000/api/livraisons?methode=' + livraison)
                .then((res) => {
                  setFraistotal(fraisPays + parseFloat(PrixPoid) + parseFloat(res.data['hydra:member'][0].prix))
                  setFrais(fraisPays + parseFloat(PrixPoid))
                })
            }
            else {
              axios.get('https://localhost:8000/api/pays?pays=autre')
                .then((res) => {
                  let fraisPays = (parseFloat(res.data['hydra:member'][0].prix))
                  axios.get('https://localhost:8000/api/livraisons?methode=' + livraison)
                    .then((res) => {
                      setFraistotal(fraisPays + parseFloat(PrixPoid) + parseFloat(res.data['hydra:member'][0].prix))
                      setFrais(fraisPays + parseFloat(PrixPoid))
                    })
                })
            }
          })
        if (checked === true) {
          const configuration = { headers: { 'Content-Type': "application/json", Accept: "application/ld+json" } }
          axios.post('https://localhost:8000/api/paiements', {
            "user": user_id,
            "carte": carte,
            "CVC": cvc,
            "date": date
          }, configuration)
        }
      }
    }
  }

  function modifPaye(e) {
    e.preventDefault()
    console.log(paiement)
    setKnownPaye(false)
  }

  function modifAdresse(e) {
    e.preventDefault()
    setKnownAdresse(false)
  }

  function cancelPaye(e) {
    e.preventDefault()
    setKnownPaye(true)
  }

  function cancelAdresse(e) {
    e.preventDefault()
    setKnownAdresse(true)
  }

  function Validation() {
    console.log(fraistotal)
    navigate("/recapitulatif", { state: { fraistotal, articles, total } })
  }

  function handleCheck() {
    setCheked(!checked)
  }

  return (
    <div>
      {fraistotal !== 0 ?
        <div className='validationpaiementcontainer'>
          {knownAdresse === true ?
            <p>{userAdresse}</p>
            :
            <div>
              <p>{adresse}</p>
              <p>{ville}</p>
              <p>{zipcode}</p>
              <p>{pays}</p>
            </div>
          }
          <div>
            {articles.map((item) => (
              <p key={articles.indexOf(item)}>{item.articles.titre} x {item.quantity} {parseFloat(item.articles.prix) * parseInt(item.quantity)}</p>
            ))}
          </div>
          <p>Total articles : {total}</p>
          <p>Frais de livraison : {fraistotal}</p>
          <p>Total TTC : {parseFloat(total) + parseFloat(fraistotal)}</p>
          <button onClick={() => setFraistotal(0)}>Retour</button>
          <button onClick={Validation}>Valider</button>
        </div>
        :
        <div>
          <header><Navbar /></header>
          <div className='adressecontainer'>
            {knownAdresse !== true ?
              <form>
                <input
                  value={adresse}
                  onChange={e => setAdresse(e.target.value)}
                  placeholder="Adresse"
                  type="text"
                  name="adresse"
                  required
                />
                <input
                  value={adressebis}
                  onChange={e => setAdressebis(e.target.value)}
                  placeholder="Complément d'adresse"
                  type="text"
                  name="adresseBis"
                  required
                />
                <input
                  value={ville}
                  onChange={e => setVille(e.target.value)}
                  placeholder="Ville"
                  type="text"
                  name="ville"
                  required
                />
                <input
                  value={zipcode}
                  onChange={e => setZipcode(e.target.value)}
                  placeholder="Code postal"
                  type="text"
                  name="zipcode"
                  required
                />
                <input
                  value={pays}
                  onChange={e => setPays(e.target.value)}
                  placeholder="Pays"
                  type="text"
                  name="pays"
                  required
                />
                <button onClick={(e) => cancelAdresse(e)}>Annuler</button>
              </form>
              :
              <div className='adresseknown'>
                <p>Adresse enregistré :</p>
                <p>{userAdresse}</p>
                <button onClick={(e) => modifAdresse(e)}>Utiliser une autre adresse</button>
              </div>
            }
          </div>

          <div className='paiementcontainer'>
            {knownPaye !== true ?
              <form>
                <input
                  value={carte}
                  onChange={e => setCarte(e.target.value)}
                  placeholder="Numero de carte"
                  type="text"
                  name="carte"
                  required
                />
                <input
                  value={cvc}
                  onChange={e => setCvc(e.target.value)}
                  placeholder="CVC"
                  type="text"
                  name="cvc"
                  required
                />
                <input
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  placeholder="Date d'expiration"
                  type="text"
                  name="date"
                  required
                />
                <label>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheck}
                  />
                  Enregistrer ce moyen de paiement pour mes futurs achats
                </label>
                {paiement !== null ?
                  <button onClick={(e) => cancelPaye(e)}>Annuler</button>
                  : null}
              </form>
              :
              <div className='paiementknown'>
                <p>Moyen de Paiement enregistré :</p>
                <p>Carte finissant par {paiement.carte.substring(12)}</p>
                <button onClick={(e) => modifPaye(e)}>Utiliser un autre moyen de paiement</button>
              </div>
            }
            <div className="radiopaiement" onChange={radiochange}>
              {tariflivraison.map((item) => (
                <label className='radio' key={item.id}>
                  <input name='livraison' type="radio" value={item.methode}></input>
                  <span>{item.methode} {item.prix}€</span>
                </label>
              ))}
            </div>
            <div className='paiementcommande'>
              <p>Total à payer :{(parseFloat(total) + parseFloat(frais) + parseFloat(livraisonSelect)).toFixed(2)}</p>
              <button type="submit" onClick={(e) => commande(e)}>Commander</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
} 
