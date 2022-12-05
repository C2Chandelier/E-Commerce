import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./login.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

<<<<<<< HEAD
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
=======

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
>>>>>>> d451c24bf1035d06568e4ae994b9654c24e66ce6
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
        <Link to="/home" id='button' type="button" className="btn btn-primary" onClick={() => connection()}>Connection</Link>
      </form>
      <div className='form-register'>
        <p>Pas encore de compte ?</p>
        <Link to="/register">Inscrivez vous !</Link>
      </div>
      </div>
 
  );
}

export default Login;




