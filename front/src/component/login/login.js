import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./login.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Login =() => {
    const [email, setEmail] = useState("");
    const [tableau, setTableau] = useState(null);
    const [password, setPassword] = useState("");
    const [error,setError] = useState(null);
   // let navigate = useNavigate();
   // const routeChange = () =>{ 
   //   let path = ""; 
   //   navigate(path);
   // }
   //<button onClick={(routeChange) =>  inscription()}>S'inscrire</button>  // a mettre au niveau du submit du form
    useEffect(()=>{
      if(tableau == 0 ){
         alert("EMAILMDPINCONNU")
       }
       if(tableau ==1){
         alert("C'estCARRER")
       }
       
    }, [tableau])
    const connection = () =>
    {
       if(email == "" || password =="" ) // n'affiche pas le return 
       {
          return <p>Email vide</p>
       }
        axios('https://localhost:8000/api/users?email='+email+'&password='+password)
        .then( (res) => {
          
           setTableau(res.data["hydra:member"].length)
        })
        .catch(setError);
          if (error) return <p>An error occurred</p>     
    }
  
    return (
      <div className='container cont2 col-md-7'>
      <form className='form2 col-md-5'>
  <div class="form-group emaildiv2">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)}  value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
  </div>
  <button id='button' type="button" class="btn btn-primary" onClick={() =>connection()}>Connection</button>
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
          
        <button onClick={() =>  inscription()}>S'inscrire</button> 
      </div>   */}
      </div>


        // <div>
        //   <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' value={email} name="email" ></input>
        //   <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='password' name="password" value={password}></input>
        //   <button onClick={() =>connection()}>Connecter</button> 
        // </div>  
    );
} 
  export default Login;
  
              


