import { Link } from "react-router-dom";

export default function Connect(){
    return (
        <div>
        <p>Vous n'etes pas connecté !</p>
        <Link to={"/login"}>Se connecter à mon compte </Link>
        <Link to={"/register"}>Pas encore de compte ?</Link>
        <button>Passer au paiement sans me connecter</button>
        </div>
    )
}