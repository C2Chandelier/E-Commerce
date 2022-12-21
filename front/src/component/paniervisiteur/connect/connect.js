import { Link } from "react-router-dom";
import './connect.css'
export default function Connect(){
    return (
        
        //<div className="containeurr">
        //        <p>Vous n'etes pas connecté !</p>
        //        <button>Passer au paiement sans me connecter</button>
        //    <div className="groupe">
        //        <Link  to={"/login"}>Se connecter</Link>
        //        <Link  to={"/register"}>Pas encore de compte ?</Link>
        //    </div>
        //</div>
        <div class="containerr">
        <header>
            <h1>
                <a href="#">
                    <img src={"http://tfgms.com/sandbox/dailyui/logo-1.png"} alt={"Authentic Collection"}/>
                </a>
            </h1>
        </header>
        <h1 class="text-center">Vous n'etes pas connecté !</h1>
        <form class="registration-form">
            <div class="text-center">
            <Link  to={"/login"}><button class="submit" name="register">S'inscrire</button></Link>
            <Link  to={"/register"}><button class="submit" name="register"> Se Connecter</button></Link>
            </div>
            <div className="text-centerSansCo">
                <button className="sansconnection">Passer au paiement sans me connecter</button>
            </div>
        </form>
        </div>
    )
}