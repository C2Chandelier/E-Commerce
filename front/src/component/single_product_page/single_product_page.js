import {useEffect,useState } from 'react'
import axios from 'axios'

export default function Single_product() {

    const [error, setError] = useState(null);
    const [product, setProduct] = useState({});


    useEffect(() => {
          axios("https://localhost:8000/api/articles/1")
            .then((response) => {
              setProduct(response.data) 
              setError(null);
            })
            .catch(setError);

      }, []);
      if (error) return <p>An error occurred</p>

      

      console.log(product);

    return (
        <div className="Single_product">
            <div className="img_product">
                <img
                    src={product.image}
                    alt={product.titre}
                    width="500px"
                    height="500px"
                />
            </div>
            <div className="product">
                <div className="product_title"><h2>{product.titre}</h2></div>
                <div className="product_price">{product.prix}</div>
            </div>
            <div className="product_desc">
                <h3>Description :</h3>
                <p>{product.description}</p>
            </div>
        </div>
    )
}






