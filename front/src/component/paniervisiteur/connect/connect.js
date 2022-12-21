import { Link } from "react-router-dom";
import './connect.css'
export default function Connect(){
    return (
        <div className="containerr">
        <header>
            <h1>
                    <img src={"http://tfgms.com/sandbox/dailyui/logo-1.png"} alt={"Authentic Collection"}/>
            </h1>
        </header>
        <h1 className="text-center">Vous n'etes pas connecté !</h1>
        <form className="registration-form">
            <div class="text-center">
            <Link  to={"/register"}><button className="submit" name="register">S'inscrire</button></Link>
            <Link  to={"/login"}><button className="submit" name="register"> Se Connecter</button></Link>
            </div>
            <div className="text-centerSansCo">
                <button className="sansconnection">Passer au paiement sans me connecter</button>
            </div>
        </form>
        </div>
    )
}