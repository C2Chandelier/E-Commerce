import React from 'react';
import "./profilHover.css"
import { Link } from 'react-router-dom';

export default function ProfilHover() {

    return(
        <div className='profilhoverMain'>
            <div className='profilLinksDiv'>
            <Link className='profilLinks'>Votre Compte</Link><br></br>
            <Link  to={"/historiqueCommandes"}  className='profilLinks'>Vos Commandes</Link>
            </div>
        </div>
    )
}