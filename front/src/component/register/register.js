import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./register.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [genre, setGenre] = useState("Homme");
  const [role] = useState(0);
  const [isActive] = useState(0);
  const navigate = useNavigate();

 

  function inscription()
  {
    
     if(email === "" || password === "" || username === "") // n'affiche pas le return 
     {
        alert("Veuillez renseigner tous les champs")
     }
     else
     {
      console.log("oui");
      console.log(email,password,genre,username);
      const configuration = {headers:{'Content-Type': "application/json", Accept: "application/json"}}
      axios.post('https://localhost:8000/api/users', { email,password,username,genre,role,isActive}, configuration)
      .then(res => {
        
      })
      navigate("/");
    }
}
  return (
      <div className='container col-md-7'>
        
      <form className='form col-md-5'>
  <div className="form-group">
    <label htmlfor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}  value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
  </div>
  <div className="form-group">
    <label htmlfor="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
  </div>

  <div className="form-group">
    <label htmlfor="text">Username</label>
    <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)}  value={username} id="Username" aria-describedby="text" placeholder="Enter username" required></input>
  </div>

  <div className="form-group col-md-6">
      <label htmlfor="inputGenre">Genre</label>
      <select id="inputGenre" className="form-control"  value={genre} onChange={(e)=>setGenre(e.target.value)} required>
        <option value="Homme" selected>Homme</option>
        <option value="Femme">Femme</option>
        <option value="Autres">Autres</option>
      </select>
    </div>

  <button id='button' type="button" className="btn btn-primary" onClick={() =>  inscription()}>S'inscrire</button>
  <div className="form-group btn-ret">
  <Link to ="/" className='btn btn-primary'>Retour</Link>
  </div>
  
</form>
      </div>
  );
};
export default Register;
