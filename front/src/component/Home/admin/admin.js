import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css';

export default function ButtonAdmin(){

        console.log(localStorage.getItem('role'))
        if(localStorage.getItem('role') !== "1"){
            return ""
        }
        if(localStorage.getItem('role') === "1"){
            return (
                <Link to={"/admin"}>Admin</Link>
            )
        }
}