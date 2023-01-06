import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './profil.css';


export default function Profil() {
    const id_user = localStorage.getItem('id');
    const navigate = useNavigate();
    const location = useLocation()
    const [users, setUsers] = useState([]);
    const [modif,setModif] = useState(false);


    useEffect(() => {
        if (location.state !== "login") {
            navigate("/login", { state: { data: "profil" } })
        }
        axios("https://localhost:8000/api/users/" + id_user)
            .then((response) => {
                console.log(response)
                setUsers(response.data)
            })
        }, [])
    function modifier(){
        setModif(true);
    }
/*     function savemodif(){

    } */
  
    return (

        <div className="mainprofiluser">
            <div className="titreedit">
                <h3>Editer son profil</h3>
            </div>
            {modif === false ? 
            <div className="profiluser">
                <p>Nom : {users.Nom}</p>
                <p>Prénom : {users.Prenom}</p>
                <p>Email : {users.email}</p>
                <p>Password : {users.password}</p>
                <p>Pays : {users.Pays}</p>
                <p>Adresse : {users.Adresse}</p>
                <p>Téléphone : {users.Tel}</p>
                <p>Code Postal : {users.zipcode}</p>
                <div className="paiement">
                    <p>Moyen de paiement enregistré : </p>
                    <p>Carte finissant par {users.paiement.carte.substring(12)}</p> 
                    <button>Modifier ce moyen de paiement</button>
                </div>
                <button onClick={modifier}>modif</button>
            </div>
            
            :
            
            <div className="profiluserchange">
            <label>
                Nom :
                <input type="text" value={users.Nom}/>
                Prénom :
                <input type="text" value={users.Prenom}/>
                Email :
                <input Email="text" value={users.email} />
                Password :
                <input Password="text" value={users.password}/>
                Pays :
                <input Pays="text" value={users.Pays}/>
                Adresse :
                <input Adresse="text" value={users.Adresse}/>
                Tel :
                <input Téléphone="text" value={users.Tel}/>
                Code Postal :
                <input Code Postal="text" value= {users.zipcode}/> 

            </label>
            {/* <button onclick={savemodif}>Enregistrer les modifications</button> */}
            </div>
        }
    </div>

    )
} 

