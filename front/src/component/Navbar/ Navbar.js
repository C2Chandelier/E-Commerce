import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
/*   return (
    <nav className='Navbar'>
        <ul className="liste">
            <Link  to="/login"className="items">login</Link>
            <Link to="/register" className="items">register</Link>
            <li className="items">Contact</li>
            
        </ul>
    </nav>
    
  ) */
  return(
    <nav className="Navbar">
        
    <ul className="liste">
        <div className="divlogo1">
            <img src="./images/Image_Navbar/logo.png" className="logo1"/>
        </div>
        <li className="items">Accueil</li>
        <li className="items">Costume</li>
        <li className="items">Contact</li>
        <li><img className="logo2" src="./images/Image_Navbar/ajouter-au-panier.png"/></li>
        <li><img className="logo2" src="./images/Image_Navbar/logoprofil.png"/></li>

    </ul>

</nav>
  )
}
