import React, { useState } from 'react';
import axios from 'axios';
//import { useNavigate } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [genre, setGenre] = useState("Homme");
  const [role, setRole] = useState(0);
  const [isActive, setIsActive] = useState(0);
 // let navigate = useNavigate();
 // const routeChange = () =>{ 
 //   let path = ""; 
 //   navigate(path);
 // }
 //<button onClick={(routeChange) =>  inscription()}>S'inscrire</button>  // a mettre au niveau du submit du form

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
      <div>
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' value={email} name="email" ></input>
        <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='password' name="password" value={password}></input>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username' value={username} name="username"></input>
         <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
           <option value="Homme">Homme</option>
           <option value="Femme">Femme</option>
           <option value="Autres">Autres</option>
         </select>
          
        <button onClick={() =>  inscription()}>S'inscrire</button> 
      </div>  
  );
};
export default Register;
