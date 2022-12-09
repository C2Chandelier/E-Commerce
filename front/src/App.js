import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from 'react';
import AdminPannel from './component/pannel_admin/Admin_pannel';
import SingleProduct from './component/single_product_page/single_product_page';
import Register from './component/register/register';
import Login from './component/login/login';
import ResultCategorie from './component/Result/ResultCategorie/ResultCategorie';
import ResultSousCategorie from './component/Result/ResultSousCategorie/ResultSousCategorie';
import ResultSearch from './component/result/result';

import Home from './component/Home/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        </div>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>;
          <Route exact path="/register" element={<Register />}></Route>;
          <Route exact path="/" element={<Home />}></Route>;
          <Route path="/admin/*" element={<AdminPannel />}></Route>
          <Route path="/article/:id" element={<SingleProduct />}></Route>
          <Route path="/result/categorie/:id" element={<ResultCategorie />}></Route>
          <Route path="/result/souscategorie/:id" element={<ResultSousCategorie />}></Route>
          <Route path="/result/:titre" element={<ResultSearch />}></Route>
        </Routes>
      </Router>
      
    );
  }
}

