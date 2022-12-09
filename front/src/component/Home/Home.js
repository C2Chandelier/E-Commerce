import CardProduct from "./card_product/Card_product";
import Navbar from "../NavbarComponent/Navbar/ Navbar";
import Slider from "../NavbarComponent/Carousel/Carousel";
import Title from "../NavbarComponent/h1/title";
import ButtonAdmin from "./admin/admin"
import { useEffect } from "react";


export default function Home() {
    useEffect(() => {
        const handleTabClose = event => {
          localStorage.removeItem('role');
        };
    
        window.addEventListener('beforeunload', handleTabClose);
      }, []);
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <ButtonAdmin></ButtonAdmin>
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