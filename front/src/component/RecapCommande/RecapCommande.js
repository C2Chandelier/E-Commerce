import React from "react";
import { useLocation } from "react-router-dom";


export default function RecapCommande(){
    const location = useLocation()
    const frais = location.data
    console.log(location)
    return(
        <p>Recap</p>
    )
}