import axios from 'axios'
import './single_card.css'
import {useEffect,useState } from 'react';
import Navbar from "../Navbar/ Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './single_card.css';
import Bread from '../breadcrumpSingle/breadcrumpSingle';

export default function SingleProduct() {
    const [error, setError] = useState(null);
    const [product, setProduct] = useState({});


    useEffect( ()=> {   
         const path = (window.location.href.substring(window.location.href.length-1, window.location.href.length));
           axios("https://localhost:8000/api/articles/"+path)
            .then((response) => {
                const configuration = {headers:{'Content-Type': "application/merge-patch+json", Accept: "application/json"}}
                axios.patch('https://localhost:8000/api/articles/'+path, {click:response.data["click"]+1}, configuration)
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
        <Bread/>
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
                    {(() => {
                    if(product.nbStock > 0 && product.enRupture === false){
                        return (
                            <><div>
                                <button className='btn btn-light achat'>Acheter</button>
                                <button className='btn btn-light ajout-panier'>Ajouter au panier</button>
                            </div>
                            <div>
                                    <p>Il en reste {product.nbStock}</p>
                                </div></>
                        )
                    }
                    else{
                        return(
                            <><div>
                            <button className='btn btn-light achat btn-indisponible' disabled>Acheter</button>
                            <button className='btn btn-light ajout-panier btn-indisponible' disabled>Ajouter au panier</button>
                        </div>
                        
                        <div>
                                <p className='indisponible'>Article indisponible</p>
                            </div></>
                        )
                    }
                })()}  
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






