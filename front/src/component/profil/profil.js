import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profil(){
    const id_user = localStorage.getItem('id');
    const navigate = useNavigate();
    const location = useLocation()


    useEffect(() => {
        if(location.state !== "login"){
            navigate("/login",{state:{data:"profil"}})
        }
    },[])
    return(
        <p>Hello</p>
    )
}