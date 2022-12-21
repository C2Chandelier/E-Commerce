import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./login.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'



const Login = () => {
  const cookies = new Cookies();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [tableau, setTableau] = useState(null);
  const [role, setRole] = useState(null);
  const [id_user, setId_user] = useState(null);

  useEffect(() => {
    if (tableau === 0) {
      alert("Email ou mot de passe Incorrect")
    }
    if (tableau === 1) {


      axios.get('https://localhost:8000/api/paniers?user=' + id_user)
        .then((rep) => {
          const path = rep.data["hydra:member"][0]["@id"]
          let array = path.split("/")
          const id_panier = array.pop()
          if (cookies.get("article") !== undefined) {
            let cook = cookies.get("article")
            for (let i = 0; i < cook.length; i++) {
              axios.post('https://localhost:8000/api/panier_articles', {
                "panier": "api/paniers/" + id_panier,
                "articles": cook[i]['@id'],
                "quantity": cook[i].quantity,
                "size": "api/sizes/" + cook[i].size
              })
            }
            navigate('/paiement')
          }
          else {
            navigate('/')
          }
          localStorage.setItem('role', role)
          localStorage.setItem('id', id_user)
          localStorage.setItem('id_panier', id_panier)
        })
    }
  }, [tableau, navigate, role, id_user, cookies])


  async function connection(e) {
    e.preventDefault()
    await axios('https://localhost:8000/api/users?email=' + email + '&password=' + password)
      .then((res) => {
        setTableau(res.data["hydra:member"].length)
        setRole(res.data["hydra:member"][0].role);
        setId_user(res.data["hydra:member"][0].id);
        setError(null)

      })
      .catch(setError);
    if (error) return <p>An error occurred</p>
    if (email === "" || password === "") {
      alert("Champs vide")
    }


  }
  return (
    <div className='container cont2 col-md-7'>
      <form className='form2 col-md-5'>
        <div className="form-group emaildiv2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button id='button' type="submit" className="btn btn-primary" onClick={(e) => connection(e)}>Connection</button>
        <div className='form-register link-register'>
          <p>Pas encore de compte ?</p>
          <Link to="/register" className='btn btn-primary'>Inscrivez-vous</Link>
          <Link to="/" className='btn btn-primary btn-retour'>Retour</Link>
        </div>
      </form>

    </div>


  );
}
export default Login;