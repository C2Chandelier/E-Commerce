import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "../../NavbarComponent/Navbar/ Navbar";
import axios from "axios";
import "./modifPaiement.css"

export default function ModifPaiement() {
    const location = useLocation();
    const navigate = useNavigate()
    const users = location.state.data;
    console.log(users)
    const [numero, setNumero] = useState("")
    const [CVC, setCVC] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        if (users.paiement !== undefined) {
            setNumero(users.paiement.carte)
            setCVC(users.paiement.CVC)
            setDate(users.paiement.date)
        }
    }, [])

    function savemodif() {
        if (numero !== "" && CVC !== "" && date !== "") {
            if (users.paiement !== undefined) {
                const id_paiement = users.paiement["@id"].split("/").pop()
                const configuration = { headers: { 'Content-Type': "application/merge-patch+json", Accept: "application/ld+json" } }
                axios.patch('https://localhost:8000/api/paiements/' + id_paiement,
                    {
                        carte: numero,
                        CVC: CVC,
                        date: date
                    }
                    , configuration)
                    .then((res) => {
                        navigate("/profil", { state: "login" })
                    })
            }
            else {
                const configuration = { headers: { 'Content-Type': "application/json", Accept: "application/ld+json" } }
                axios.post('https://localhost:8000/api/paiements', {
                    "user": users['@id'],
                    "carte": numero,
                    "CVC": CVC,
                    "date": date
                }, configuration)
                    .then((res) => {
                        navigate("/profil", { state: "login" })
                    })
            }
        }
        else {
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