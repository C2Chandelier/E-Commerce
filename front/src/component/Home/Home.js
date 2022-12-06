import CardProduct from "./card_product/Card_product";
import Navbar from "../Navbar/ Navbar";
import { Link } from "react-router-dom";
import Slider from "../Carousel/Carousel";
import Title from "../h1/title";


export default function Home() {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Link to={"/admin/"}>Admin</Link>
            </header>
            <div>
                <Slider />
            </div>
            
                <Title />
            
            
            <div>
            <CardProduct />
            </div>
        </div>
    );
}