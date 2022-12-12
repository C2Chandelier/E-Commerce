import React from 'react'
import { useState, useEffect } from 'react';
import './panier.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Panier() {
    const [error, setError] = useState(null);
    const [object, setObject] = useState([]); 

  useEffect(() => {
      axios.get("https://localhost:8000/api/paniers")
      .then((response) => {
        console.log(response.data["hydra:member"])
        setObject(response.data["hydra:member"])
        setError(null);
        console.log(localStorage.getItem("id"));
      })
      .catch(setError);

  }, []);
  if (error) return <p>An error occurred</p>

  return (
    <div className='contenairedetails'>
     <p>oui fro</p>
    </div>
  );

}


export default Panier;
