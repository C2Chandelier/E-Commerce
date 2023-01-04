import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Paiement() {
  const [carte, setCarte] = useState("");
  const [cvc, setCvc] = useState("");
  const [date, setDate] = useState("");
  const [livraison, setLivraison] = useState("");
  const [fraistotal, setFraistotal] = useState(0);
  const [tariflivraison, setTariflivraison] = useState([])
  const [known, setKnown] = useState(false)
  const articles = useLocation().state.data
  const frais = useLocation().state.frais
  const total = useLocation().state.prix
  const [paiement, setPaiement] = useState([]);
  const [change, setChange] = useState(false)
  const navigate = useNavigate();
  const [livraisonSelect, setLivraisonSelect] = useState(0)

  const id_user = localStorage.getItem('id')

  useEffect(() => {
    if (fraistotal !== 0) {
      navigate("/recapitulatif", { state: {fraistotal,articles,total} })
    }
    else {
    axios('https://localhost:8000/api/users/' + id_user)
      .then((response) => {
        if (response.data.paiement !== undefined) {
          setPaiement(response.data.paiement)
          setKnown(true)
        }
      })
    console.log(fraistotal)
    axios('https://localhost:8000/api/livraisons')
      .then((res) => {
        setTariflivraison(res.data['hydra:member'])
      })
    }
  }, [fraistotal])

  function radiochange(e) {
    setLivraison(e.target.value,);
    axios.get('https://localhost:8000/api/livraisons?methode=' + e.target.value)
      .then((res) => {
        setLivraisonSelect(parseFloat(res.data['hydra:member'][0].prix))
      })
  }

  function commande(e) {
    e.preventDefault()
    if (known === true) {
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

    if (known !== true) {
      if (carte === "" || cvc === "" || livraison === "" || date === "") {
        alert("Veuillez renseigner tous les champs")
      }
      else {
        if (change === false) {
          const configuration = { headers: { 'Content-Type': "application/json", Accept: "application/json" } }
          axios.post('https://localhost:8000/api/paiements', { user: "api/users/" + id_user, carte: carte, CVC: cvc, date: date }, configuration)
        }
        else {
          const configuration = { headers: { 'Content-Type': "application/merge-patch+json", Accept: "application/ld+json" } }
          axios.patch('https://localhost:8000/api/paiements/' + paiement.id, { user: "api/users/" + id_user, carte: carte, CVC: cvc, date: date }, configuration)
        }
        axios.get('https://localhost:8000/api/livraisons?methode=' + livraison)
          .then((res) => {
            setFraistotal(parseFloat(frais) + parseFloat(res.data['hydra:member'][0].prix))
          })

      }
    }
  }

  function modif(e) {
    e.preventDefault()
    console.log(paiement)
    setChange(true)
    setKnown(false)
  }

  return (
    <div>
      {known !== true ?
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
        </form>
        :
        <div>
          <p>Moyen de Paiement enregistré :</p>
          <p>Carte finissant par {paiement.carte.substring(12)}</p>
          <button onClick={(e) => modif(e)}>Modifier ce moyen de paiement</button>
        </div>
      }
      <div onChange={radiochange}>
        {tariflivraison.map((item) => (
          <label className='radio' key={item.id}>
            <input name='livraison' type="radio" value={item.methode}></input>
            <span>{item.methode} {item.prix}€</span>
          </label>
        ))}
      </div>
      <p>Total à payer :{(parseFloat(total) + parseFloat(frais) + parseFloat(livraisonSelect)).toFixed(2)}</p>
      <button type="submit" onClick={(e) => commande(e)}>Commander</button>

    </div>
  )
}
