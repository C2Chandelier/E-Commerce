
import React from 'react';
import "./barre.css"
import SearchIcon from '@mui/icons-material/Search';
import {useState } from 'react';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

export default function BarreRecherche() {
    const [article, setArticle] = useState("");
    const navigate = useNavigate();
    const [loupe,SetLoupe]= useState(true);
    const [barre,SetBarre]=useState(false);
    function SearchArticle(){
      if(article !== ""){
      navigate("/result/"+article);
      }else{
        alert("Veuillez écrire quelques choses dans la barre de recherche!");
      }
        }
    function Click(){
      SetLoupe(false)
      SetBarre(true)
    }
    function UnClick(){
      SetLoupe(true)
      SetBarre(false)
    }
  return (
    <div className='container_recherche'>
    <div className='search'>
    {(loupe ? <div className='searchIcon'> <button onClick={Click}><SearchIcon className='icon'/></button> </div>:<div className='croixIcone'> <button onClick={UnClick}><CloseIcon className='icon'/></button></div>)}
    </div>
    <div className='searchInputs'>
    {(barre ?  <div className='searchInputs'> <input type="text" onChange={(e)=> setArticle(e.target.value)} value={article} placeholder="Recherche" required /> 
                <div className='searchIcon'> <button onClick={SearchArticle}><SearchIcon className='icon'/></button> </div></div>
    : null)}
    </div>
    </div>

  )

  

}