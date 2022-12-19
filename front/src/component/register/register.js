import React, { useState, useEffect } from 'react';
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
  const [isActive] = useState(1);
  const [id_user,setId_user] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    if(id_user !== null){
      axios.post('https://localhost:8000/api/paniers',{
          "user": "api/users/"+id_user 
        })
        .then((res)=>{
          console.log(res);
          const path = res.data["@id"]
        let array = path.split("/")
        const id_panier = array.pop()
        localStorage.setItem('id_panier',id_panier);
        localStorage.setItem('id',id_user);

          navigate("/")
        })
    }
  }, [id_user,navigate])

  
  function inscription()
  {
  
    
     if(email === "" || password === "" || username === "")
     {
        alert("Veuillez renseigner tous les champs")
     }
     else
     {
      const configuration = {headers:{'Content-Type': "application/json", Accept: "application/json"}}
      axios.post('https://localhost:8000/api/users', { email,password,username,genre,role,isActive}, configuration)
      .then((res) => {
        setId_user(res.data.id)
      });
      
    }
}
  return (
      <div className='container col-md-7'>
        
      <form className='form col-md-5'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}  value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
  </div>

  <div className="form-group">
    <label htmlFor="text">Username</label>
    <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)}  value={username} id="Username" aria-describedby="text" placeholder="Enter username" required></input>
  </div>

  <div className="form-group col-md-6">
      <label htmlFor="inputGenre">Genre</label>
      <select id="inputGenre" className="form-control"  value={genre} onChange={(e)=>setGenre(e.target.value)} required>
        <option value="Homme" >Homme</option>
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
