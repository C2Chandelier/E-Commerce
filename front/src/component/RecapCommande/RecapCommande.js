import React from "react";
import { useLocation } from "react-router-dom";


export default function RecapCommande(){
    const location = useLocation()
    const frais = location.data
    console.log(frais)
    return(
        <p>Recap</p>
    )
}