import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./login.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [tableau, setTableau] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(tableau)

  }, [tableau])
  const connection = () => 
  {
    axios('https://localhost:8000/api/users?email=' + email + '&password=' + password)
      .then((res) => {

        setTableau(res.data["hydra:member"].length)
      })
      .catch(setError);
      if (error) return <p>An error occurred</p>
    if (email === "" || password === "" || tableau === null) // n'affiche pas le return 
    {
      alert("Email ou Mot de passe incorrect")
    }
    else
    {
      navigate("/");
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
        <button  id='button' type="submit" className="btn btn-primary" onClick={() => connection()}>Connection</button>
        <div className='form-register link-register'>
        <p>Pas encore de compte ?</p>
        <Link to="/register" className='btn btn-primary'>Inscrivez-vous</Link>
        <Link to ="/" className='btn btn-primary btn-retour'>Retour</Link>
      </div>
      </form>
  
      </div>
 
  );
}
export default Login;






