import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "../../NavbarComponent/Navbar/ Navbar";
import axios from "axios";

export default function ModifPaiement() {
    const location = useLocation();
    const navigate = useNavigate()
    const users = location.state.data;
    console.log(users)
    const [numero, setNumero] = useState(users.paiement.carte)
    const [CVC, setCVC] = useState(users.paiement.CVC)
    const [date, setDate] = useState(users.paiement.date)

    function savemodif() {
        if (numero !== "" && CVC !== "" && date !== "") {
            const id_paiement = users.paiement["@id"].split("/").pop()
            const configuration = { headers: { 'Content-Type': "application/merge-patch+json", Accept: "application/ld+json" } }
            axios.patch('https://localhost:8000/api/paiements/' + id_paiement,
                {
                    carte: numero,
                    CVC: CVC,
                    date: date           
                }
                , configuration)
                navigate("/profil",{state:"login"})
        }
        else{
            alert("Veuillez remplir tous les champs")
        }
    }

    return (
        <div>
            <header><Navbar></Navbar></header>
            <div className="containermodifpaiement">
                <label>
                    Numero de carte :
                    <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />
                </label>
                <label>
                    CVC :
                    <input type="text" value={CVC} onChange={e => setCVC(e.target.value)} />
                </label>
                <label>
                    Date :
                    <input type="text" value={date} onChange={e => setDate(e.target.value)} />
                </label>
                <button onClick={savemodif}>Enregistrer les modifications</button>
            </div>
        </div>
    )
}