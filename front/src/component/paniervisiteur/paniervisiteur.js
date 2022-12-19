import React from 'react'
import { useState, useEffect } from 'react';
import './paniervisiteur.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Navbar from '../NavbarComponent/Navbar/ Navbar';
import Cookies from 'universal-cookie';
function PanierVisiteur()
{
    let total = 0;
    const [length, setLength] = useState(null)
    const cookies = new Cookies();
    const [array, setArray] = useState(null);
    useEffect(() => {
      setArray(cookies.get('article'))
    }, [length]);
      if(array !== null)
      {
        array.map((item) => { 
          total = total + parseFloat(item.prix) * parseInt(item.quantity);
        })
      } 
      if(array !== null)
      {
        array.filter((item)=>{
          if(parseInt(item.quantity)=== 0)
          {
            DeleteItem(item.id)
          }
        
        })
      }
       function DeleteItem(id)
      {
            const id_article = id
          array.filter((res) => {
            if (parseInt(res.id) === parseInt(id_article)) {
              delete array.splice(array.indexOf(res), 1)
              setArray(array)
              cookies.set('article',array)
              setLength(array.length)
            }
        })
      }
      function setMoreQuantity(e)
      {
        let  id_article = e.target.value.substring(14)
        
            //let quantité = parseInt(.quantity)+1
          array.map((item)=>{
            if(parseInt(id_article) === parseInt(item.id))
            {
             item.quantity = item.quantity + 1;
              setArray(array)
              cookies.set('article',array)
              setLength(length+1);
            }
          }) 
             
                
               // setLength(length+1);
           
      }
      function setLessQuantity(e)
      {
        let  id_article = e.target.value.substring(14)
        
            //let quantité = parseInt(.quantity)+1
          array.map((item)=>{
            if(parseInt(id_article) === parseInt(item.id))
            {
              item.quantity = item.quantity - 1;
              setArray(array)
              cookies.set('article',array)
              setLength(length-1);
            }
          }) 
      }

      return (
      <div>
          <header><Navbar /></header>
           {array === undefined || array ===null ?
          <p>Vide</p>
          
          :
          <div className='containeur'>
            {array.map((item) => ( 
            
            <Card id={"produit-" + item.id} key={item.id} className="card">
              <Card.Img className='card__img' src={item.image} alt={item.titre} />
              <Card.Body className='card__body'>
                <Link to={"/article/" + item.id} className="link_none">
                  <Card.Title className='card__title' >{item.titre}</Card.Title>
                </Link>
                <Card.Subtitle className='card__price'>{item.prix}</Card.Subtitle>
                <button id={"btn_" + item.id} onClick={() => DeleteItem(item.id)}>&#x2716;</button>
              <input  type="text" value={item.quantity} readOnly></input>
              <button value={item["@id"]} onClick={(e) => setMoreQuantity(e)}>+</button>
              <button value={item["@id"]} onClick={(e) => setLessQuantity(e)}>-</button>
              </Card.Body>
            </Card>
          ))
            }  
          </div>
          } 
           <p>total : {total}€</p> 
          <Link className="btn-back" to={"/"}>Retour</Link>
      </div>
      )
      
      
}
export default PanierVisiteur;