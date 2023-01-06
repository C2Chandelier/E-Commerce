import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './profil.css';


export default function Profil() {
    const id_user = localStorage.getItem('id');
    const navigate = useNavigate();
    const location = useLocation()
    const [users, setUsers] = useState([]);
    const [modif, setModif] = useState(false);

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pays, setPays] = useState("");
    const [Adresse, setAdresse] = useState("");
    const [Tel, setTel] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [Ville, setVille] = useState("");



    useEffect(() => {
        if (location.state !== "login") {
            navigate("/login", { state: { data: "profil" } })
        }
        else {
            axios("https://localhost:8000/api/users/" + id_user)
                .then((response) => {
                    setUsers(response.data)
                })
        }
    }, [])

    function modifier() {
        setModif(true);
    }

    function savemodif() {
        users.Nom = nom
        users.Prenom = prenom
        users.email = email
        users.password = password
        users.Pays = pays
        users.Adresse = Adresse
        users.Ville = Ville
        users.Tel = Tel
        users.zipcode = zipcode

        const configuration = { headers: { 'Content-Type': "application/merge-patch+json", Accept: "application/ld+json" } }
        axios.patch('https://localhost:8000/api/users/' + id_user,
            {
                email: users.email,
                password: users.password,
                role: users.role,
                Nom: users.Nom,
                Prenom: users.Prenom,
                Tel: users.Tel,
                Adresse: users.Adresse,

            }
            , configuration)
    }

    console.log(users)

    return (
        users !== [] && users.length !== 0 ?

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
                        <p>Ville : {users.Ville}</p>
                        <p>Téléphone : {users.Tel}</p>
                        <p>Code Postal : {users.zipcode}</p>
                        <button onClick={modifier}>modif</button>
                        <div className="paiement">
                            <p>Moyen de paiement enregistré : </p>
                            <p>Carte finissant par {(users.paiement.carte).substring(12)}</p>
                            <button>Modifier ce moyen de paiement</button>
                        </div>
                    </div>

                    :

                    <div className="profiluserchange">
                        <label>
                            Nom :
                            <input type="text" value={users.Nom} onChange={e => setNom(e.target.value)} />
                        </label>
                        <label>
                            Prénom :
                            <input type="text" value={users.Prenom} onChange={e => setPrenom(e.target.value)} />
                        </label>
                        <label>
                            Email :
                            <input Email="text" value={users.email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>
                            Password :
                            <input Password="text" value={users.password} onChange={e => setPassword(e.target.value)} />
                        </label>
                        <label>
                            Pays :
                            <input Pays="text" value={users.Pays} onChange={e => setPays(e.target.value)} />
                        </label>
                        <label>
                            Ville :
                            <input Pays="text" value={users.Ville} onChange={e => setVille(e.target.value)} />
                        </label>
                        <label>
                            Adresse :
                            <input Adresse="text" value={users.Adresse} onChange={e => setAdresse(e.target.value)} />
                        </label>
                        <label>
                            Tel :
                            <input Téléphone="text" value={users.Tel} onChange={e => setTel(e.target.value)} />
                        </label>
                        <label>
                            Code Postal :
                            <input Code Postal="text" value={users.zipcode} onChange={e => setZipcode(e.target.value)} />
                        </label>
                        <button onClick={savemodif}>Enregistrer les modifications</button>
                    </div>
                }
            </div>

            : null

    )
}

