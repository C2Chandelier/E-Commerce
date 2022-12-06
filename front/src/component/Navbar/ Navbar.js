import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return(
    <nav className="Navbar">
        
    <ul className="liste">
        <div className="divlogo1">
            <img src="/images/Image_Navbar/logo.png" className="logo1" alt="costume"/>
        </div>
        <li className="items">Accueil</li>
        <li className="items">Costume</li>
        <li className="items">Contact</li>
        <li><Link to={"/"}><img className="logo2" src="/images/Image_Navbar/ajouter-au-panier.png" alt="costume"/></Link></li>
        <li><Link to={"/login"}><img className="logo2" src="/images/Image_Navbar/logoprofil.png" alt="costume"/></Link></li>

    </ul>
</nav>
  )
}
