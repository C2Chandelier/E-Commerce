import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./register.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//import { useNavigate } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [genre, setGenre] = useState("Homme");
  const [role, setRole] = useState(0);
  const [isActive, setIsActive] = useState(0);
 

  function inscription()
  {
    
     if(email == "" || password =="" || username =="") // n'affiche pas le return 
     {
        return <p>Email vide</p>
     }
      console.log("oui");
      console.log(email,password,genre,username);
      const configuration = {headers:{'Content-Type': "application/json", Accept: "application/json"}}
      axios.post('https://localhost:8000/api/users', { email,password,username,genre,role,isActive}, configuration)
      .then(res => {
        alert("Succes");
      })
}
  return (
      <div className='container col-md-7'>
        
      <form className='form col-md-5'>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)}  value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
  </div>

  <div class="form-group">
    <label for="text">Username</label>
    <input type="text" class="form-control" onChange={(e)=>setUsername(e.target.value)}  value={username} id="Username" aria-describedby="text" placeholder="Enter username" required></input>
  </div>

  <div class="form-group col-md-6">
      <label for="inputGenre">Genre</label>
      <select id="inputGenre" class="form-control"  value={genre} onChange={(e)=>setGenre(e.target.value)} required>
        <option value="Homme" selected>Homme</option>
        <option value="Femme">Femme</option>
        <option value="Autres">Autres</option>
      </select>
    </div>

  <button id='button' type="button" class="btn btn-primary" onClick={() =>  inscription()}>S'inscrire</button>
</form>




      {/* <div>
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' value={email} name="email" ></input>
        <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='password' name="password" value={password}></input>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username' value={username} name="username"></input>
         <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
           <option value="Homme">Homme</option>
           <option value="Femme">Femme</option>
           <option value="Autres">Autres</option>
         </select>
          
        <Link to={'/home'} onClick={() =>  inscription()}>S'inscrire</Link> 
      </div>  
        <button onClick={() =>  inscription()}>S'inscrire</button> 
      </div>   */}
      </div>
  );
};
export default Register;
