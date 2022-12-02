import CardProduct from "./card_product/Card_product";
import Navbar from "../Navbar/ Navbar";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Link to={"/admin/"}>Admin</Link>
            </header>
            <div>
            <CardProduct />
            </div>
        </div>
    );
}