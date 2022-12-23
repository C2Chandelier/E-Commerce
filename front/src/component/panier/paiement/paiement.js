import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useLocation } from 'react-router-dom';

export default function Paiement() {
  const [numerocb, setNumerocb] = useState("");
  const [cvc, setCvc] = useState("");
  const [date, setDate] = useState("");
  const [livraison, setLivraison] = useState("");
  const [fraistotal, setFraistotal] = useState(0);
  const data = useLocation().state.data
  const frais = useLocation().state.frais

  useEffect(() => {
    console.log(fraistotal)
  }, [fraistotal])

  function radiochange(e) {
    setLivraison(e.target.value,);
  }

  function commande(e) {
    e.preventDefault()
    /* if(numerocb === "" || cvc === "" || livraison === "" || date === "")
    {
      alert("Veuillez renseigner tous les champs")
    } */

    axios.get('https://localhost:8000/api/livraisons?methode=' + livraison)
      .then((res) => {
        setFraistotal(parseFloat(frais) + parseFloat(res.data['hydra:member'][0].prix))
      })
  }
  return (
    <div>
      <form>
        <input
          value={numerocb}
          onChange={e => setNumerocb(e.target.value)}
          placeholder="Numero de carte"
          type="text"
          name="numerocb"
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
        <div onChange={radiochange}>
          <label className="radio">
            <input name="livraison" type="radio" value="Normal" />
            <span>Normal</span>
          </label>
          <label className="radio">
            <input name="livraison" type="radio" value="Relais" />
            <span>Normal Relais</span>
          </label>
          <label className="radio">
            <input name="livraison" type="radio" value="Suivis" />
            <span>Normal suivis</span>
          </label>
          <label className="radio">
            <input name="livraison" type="radio" value="Recommande" />
            <span>Recommandé</span>
          </label>
          <label className="radio">
            <input name="livraison" type="radio" value="Express" />
            <span>Express</span>
          </label>
        </div>
        <button type="submit" onClick={(e) => commande(e)}>Commander</button>
      </form>
    </div>
  )
}
