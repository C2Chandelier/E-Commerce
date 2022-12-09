import { Link } from 'react-router-dom'
import './Navbar.css'
// import Barre from '../Barre/barre'
import BarreRecherche from '../Barre/barre'
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
        {/* <li><Barre placeholder="Recherche"/></li>  */}
        <div className='logoIcons'>
        <li><Link to={"/"}><img className="logo2" src="/images/Image_Navbar/ajouter-au-panier.png" alt="costume"/></Link></li>
        <li><Link to={"/login"}><img className="logo2" src="/images/Image_Navbar/logoprofil.png" alt="costume"/></Link></li>
        <li><BarreRecherche/></li>
        </div>
      
       

    </ul>
</nav>
  )
}
