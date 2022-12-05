import {useEffect,useState } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/ Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './single_card.css';

export default function SingleProduct() {

    const [error, setError] = useState(null);
    const [product, setProduct] = useState({});


    useEffect( ()=> {   
         const path = (window.location.href.substring(window.location.href.length-1, window.location.href.length));
           axios("https://localhost:8000/api/articles/"+path)
            .then((response) => {
              setProduct(response.data) 
              setError(null);
            })
            .catch(setError);

      }, []);
      if (error) return <p>An error occurred</p>

      

      console.log(product);

    return (
        <div className='main'>
        <header>
              <Navbar></Navbar>
        </header>
        <div className="Single_product">
            <div className="img_product">
                <img 
                    src={product.image}
                    alt={product.titre}
                />
            </div>
            <div className="product">
                <div className="product_title"><h2>{product.titre}</h2></div>
                <hr className="col-md-12"></hr>
                <div className="product_price">{product.prix}€</div>
                <div className="product-btn">
                    <button className='btn btn-light achat'>Acheter</button>
                    <button className='btn btn-light ajout-panier'>Ajouter au panier</button>
                </div>
                <div className="product_desc">
                <h3>Description :</h3>
                <p>{product.description}</p>
            </div>
            </div>
    
        </div>
        </div>
    )
}






