import React, {useState,useEffect} from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className='Navbar'>
        <ul className="liste">
            <li className="items">Accueil</li>
            <li className="items">Services</li>
            <li className="items">Contact</li>
            
        </ul>
    </nav>
  )
}
