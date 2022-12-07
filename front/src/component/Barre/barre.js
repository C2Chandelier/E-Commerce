import React from 'react';
import axios from 'axios';
import {useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import "./barre.css";



export default function Barre() {

  return (

    <div className='recherche'>

        <input type="text" name="recherchebar" id="recherchebar" placeholder='Rechercher'></input>

    

    <div className='recherche_resultats'>

        <div className='recherche_resultat'>Donnée</div>

         <button type="button"><img src="/images/Image_Navbar/loupe-removebg-preview.png" height ="30" width="30" /></button>

    </div>

    </div>

  )

}