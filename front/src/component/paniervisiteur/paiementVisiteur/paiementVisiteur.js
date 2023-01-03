import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function PaiementVisiteur() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [adressebis, setAdressebis] = useState("");
  const [ville, setVille] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [pays, setPays] = useState("");
  const [numerocb, setNumerocb] = useState("");
  const [cvc, setCvc] = useState("");
  const [date, setDate] = useState("");
  const [livraison, setLivraison] = useState("");
  const cookies = new Cookies();
  const [fraispays, setFraispays] = useState(0);
  const [fraislivraison, setFraislivraison] = useState(0);
  const [fraistotal, setFraistotal] = useState(parseFloat(cookies.get("Frais")));
  const [tariflivraison, setTariflivraison] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios('https://localhost:8000/api/livraisons')
      .then((res) => {
        setTariflivraison(res.data['hydra:member'])
      })
    setFraistotal(parseFloat(fraistotal) + parseFloat(fraislivraison) + parseFloat(fraispays))
  }, [fraislivraison])


  if (fraistotal !== parseFloat(cookies.get('Frais'))) {
    let object = { "fullname": fullname, "email": email, "tel": tel, "ville": ville, "zipcode": zipcode, "pays": pays, "numerocb": numerocb, "cvc": cvc, "date": date, "livraison": livraison, "frais": fraistotal }
    cookies.set("utilisateur", object)
    console.log("cookies utiliaateur", cookies.get('utilisateur'))
    navigate("/recapitulatifVisiteur")
  }

  function radiochange(e) {
    setLivraison(e.target.value,);
  }

  function commande(e) {
    e.preventDefault()
    /* if(fullname === "" || pays === "" || tel === "" || ville === "" || email === "" || zipcode === "" || adresse === "" || numerocb === "" || cvc === "" || livraison === "" || date === "")
    {
      alert("Veuillez renseigner tous les champs")
    } */

    axios.get('https://localhost:8000/api/pays?pays=' + pays)
      .then((res) => {
        if (res.data["hydra:totalItems"] !== 0) {
          setFraispays(parseFloat(res.data['hydra:member'][0].prix))
        }
        else {
          axios.get('https://localhost:8000/api/pays?pays=autre')
            .then((res) => {
              setFraispays(parseFloat(res.data['hydra:member'][0].prix))
            })
        }
      })
    axios.get('https://localhost:8000/api/livraisons?methode=' + livraison)
      .then((res) => {
        setFraislivraison(res.data['hydra:member'][0].prix)
      })
  }


  console.log(fraistotal)

  return (
    <div>
      <form>
        <input
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Full name"
          type="text"
          name="FullName"
          required
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email "
          type="email"
          name="Email"
          required
        />
        <input
          value={tel}
          onChange={e => setTel(e.target.value)}
          placeholder="Tel"
          type="text"
          name="Tel"
          required
        />
        <input
          value={adresse}
          onChange={e => setAdresse(e.target.value)}
          placeholder="Adresse"
          type="text"
          name="Adresse"
          required
        />
        <input
          value={adressebis}
          onChange={e => setAdressebis(e.target.value)}
          placeholder="Complement d'adresse"
          type="text"
          name="adressebis"
          required
        />
        <input
          value={ville}
          onChange={e => setVille(e.target.value)}
          placeholder="Ville"
          type="text"
          name="Ville"
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
        {tariflivraison.map((item) => (
            <label className='radio' key={item.id}>
              <input name='livraison' type="radio" value={item.methode}></input>
              <span>{item.methode} {item.prix}€</span>
            </label>
          ))}
          {/* <label className="radio">
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
          </label> */}
        </div>
        <button type="submit" onClick={(e) => commande(e)}>Commander</button>
      </form>
    </div>
  )
}