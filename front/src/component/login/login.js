import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [tableau, setTableau] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 
  useEffect(() => {
    if (tableau == 0) {
      alert("EMAILMDPINCONNU")
    }
    if (tableau == 1) {
      alert("C'estCARRER")
    }

  }, [tableau])
  const connection = () => {
    if (email == "" || password == "") // n'affiche pas le return 
    {
      return <p>Email vide</p>
    }
    axios('https://localhost:8000/api/users?email=' + email + '&password=' + password)
      .then((res) => {

        setTableau(res.data["hydra:member"].length)
      })
      .catch(setError);
    if (error) return <p>An error occurred</p>
  }

  return (
    <div className='login_container'>
      <div className='login_form'>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' value={email} name="email" ></input>
        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password' name="password" value={password}></input>
        <Link to={'/home'} onClick={() => connection()}>Connecter</Link>
      </div>
      <div className='register_form'>
        <p>Pas encore de compte ?</p>
        <Link to={'/register'}>Inscrivez vous !</Link>
      </div>
    </div>
  );
}
export default Login;




