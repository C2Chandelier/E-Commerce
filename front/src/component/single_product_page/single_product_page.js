import axios from 'axios'
import './single_card.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../NavbarComponent/Navbar/ Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './single_card.css';
import Bread from '../Result/breadcrumpSingle/breadcrumpSingle';
import PanierHover from '../NavbarComponent/panierHover/panierHover';
import PanierQuantity from '../NavbarComponent/quantity/quantity';
import Cookies from 'universal-cookie';

export default function SingleProduct() {
    const [error, setError] = useState(null);
    const [product, setProduct] = useState({});
    const path = useParams();
    const [isShown, setIsShown] = useState(false);
    const [size, setSize] = useState(2);
    

   let id = localStorage.getItem('id')


    useEffect(() => {
        axios("https://localhost:8000/api/articles/" + path.id)
            .then((response) => {
                const configuration = { headers: { 'Content-Type': "application/merge-patch+json", Accept: "application/json" } }
                axios.patch('https://localhost:8000/api/articles/' + path.id, { click: response.data["click"] + 1 }, configuration)
                setProduct(response.data)
                setError(null);
            })
            .catch(setError);

            setInterval(()=>{
                setIsShown(false);
            },3000);

    }, [path]);
    if (error) return <p>An error occurred</p>

    function AddPanier(e) {
        let id_article = "api/articles/" + e.currentTarget.id.substring(4);
        let id_panier = "api/paniers/" + localStorage.getItem('id_panier');
        let id_size = "api/sizes/"+size;

        axios("https://localhost:8000/api/panier_articles?panier=" + id_panier + "&articles=" + id_article + "&size=" + id_size)
            .then((response) => {
                let NumberArticle = response.data["hydra:totalItems"];

                if (NumberArticle === 0) {
                    const configuration = { headers: { 'Content-Type': "application/json", Accept: "application/json" } }
                    axios.post("https://localhost:8000/api/panier_articles", { "panier": id_panier, "articles": id_article, "quantity": 1,"size": id_size }, configuration)
                }

                if (NumberArticle !== 0) {
                    let id = response.data["hydra:member"][0].id
                    axios("https://localhost:8000/api/panier_articles/" + id)
                        .then((response) => {
                            const configuration = { headers: { 'Content-Type': "application/merge-patch+json", Accept: "application/json" } }
                            axios.patch('https://localhost:8000/api/panier_articles/' + id, { quantity: response.data["quantity"] + 1 }, configuration)
                        })
                        
                }
            })
        setIsShown(true);
      
    }
    function AddPanierVisiteur() 
    {
        const cookies = new Cookies();
        if(cookies.get('article')==undefined)
        {
            product.quantity = 1
            cookies.set('article', [product])
        }
        else
        {
            let compt = 0
            let mookie = cookies.get('article')
            mookie.map((item)=>{
                if(item.id == product.id)
                {
                    item.quantity = item.quantity + 1;
                    compt ++;
                }
            })
            if(compt > 0)
            {
                cookies.set('article', mookie)
            }
            else
            {
                let value = cookies.get("article")
                product.quantity = 1
                value.push(product)
                cookies.set('article', value)
            }
        }
        console.log(cookies.get("article"))
    }
    return (
        <div className='main'>
            <header>
                <Navbar> <PanierQuantity ajout={1}></PanierQuantity></Navbar>
                {isShown ? (
      <div onMouseLeave={() => setIsShown(false)}>
        <PanierHover ajout={1}></PanierHover>
        </div>
        ) : null}
            </header>
            <Bread></Bread>
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
                    {product.Promo === true ?
                        <div className='product_promo'>Promo !</div>
                        : null}
                    <div className="product-btn">
                        {(() => {
                            if (product.nbStock === 0 || product.enRupture === true) {
                                return (
                                    <div>
                                        <div>
                                            <button className='btn btn-light achat' disabled>Acheter</button>
                                            <button className='btn btn-light ajout-panier' disabled>Ajouter au panier</button>   
                                        </div>
                                        <div>
                                            <p className='indisponible'>Article indisponible</p>
                                        </div>
                                    </div>
                                )

                            }
                            else {
                                return (
                                    <>
                                    <div>
                                        {product.Size === true ? 
                                        <select onChange={(e) => setSize(e.target.value)} defaultValue="2">
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                        </select>
                                        : null}
                                    </div>
                                    <div>
                                        <button className='btn btn-light achat'>Acheter</button>

                                        {id === null
                                        ?
                                        <button id={"btn_" + product.id} className='btn btn-light ajout-panier' onClick={(e) => AddPanierVisiteur(e)}>Ajouter au panierVisiteur</button>
                                        :
                                        <button id={"btn_" + product.id} className='btn btn-light ajout-panier' onClick={(e) => AddPanier(e)}>Ajouter au panier</button> 
                                        }   
                                    </div>
                                        <div>
                                            <p>Il en reste {product.nbStock}</p>
                                        </div>
                                    </>
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






