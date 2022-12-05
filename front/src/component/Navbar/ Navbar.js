import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className='Navbar'>
        <ul className="liste">
            <Link  to="/login"className="items">login</Link>
            <Link to="/register" className="items">register</Link>
            <li className="items">Contact</li>
            
        </ul>
    </nav>
  )
}
