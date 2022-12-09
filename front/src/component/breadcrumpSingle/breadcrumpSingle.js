import React, { useEffect, useState } from "react";
import "./breadcrumpSingle.css"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import axios from "axios";
import { Link } from "react-router-dom";
  
function Bread() {
        const [titre,setTitre] = useState("");
        const [categorie,setCategorie] = useState("");
        const [souscategorie,setSouscategorie] = useState("");
        const [idsous,setIdsous] = useState("");
        const [idcate,setIdcate] = useState("");
    useEffect( ()=> {   
        const article = (window.location.href.slice(-1))
        axios("https://localhost:8000/api/articles/"+article)
        .then((res)=>{
                setTitre(res.data["titre"])
                
                if(res.data["souscategorie"])
                {
                    axios("https://localhost:8000"+res.data["souscategorie"])
                    .then((sous)=>{
                        setIdsous(sous.data["id"])
                        setSouscategorie(sous.data["name"])
                        
                    })
                }
            axios("https://localhost:8000"+res.data["categorie"])
            .then((reponse)=>{
                setIdcate(reponse.data["id"])
                setCategorie(reponse.data["name"])
               
                
            })
        })
     }, []);
    return (
        <div className="filda">
            <Breadcrumb>
            <BreadcrumbItem><Link to={"/"}>Acceuil</Link></BreadcrumbItem>
               <BreadcrumbItem><Link to={"/result/categorie/"+idcate}>{categorie}</Link></BreadcrumbItem>
                {souscategorie
                    ?<BreadcrumbItem><Link to={"/result/souscategorie/"+idsous}>{souscategorie}</Link></BreadcrumbItem>
                    : null
                }
               <BreadcrumbItem>{titre}</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
}
export default Bread;