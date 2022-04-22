import AddGame from "./components/AddGame";
import Listgames from "./components/Listgames";
import Home from "./components/Home";
import Contactme from "./components/Contactme";
import './App.css'
import Login from "./components/Login";
import {BrowserRouter , Routes, Route, Link } from "react-router-dom";

import React, { Component } from "react";
import Signup from "./components/Signup";
import MerchSell from "./components/MerchSell";
import Searchlist from "./components/Searchlist";
export default class App extends Component {
  render() {
    return (
      <div >
        <div className="mylinks">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign  up</Link>
          <Link to="/buy">Buy Merch</Link>
          <Link to="/contact">Contact</Link>
          
        </div>

        {/* ========================= */}

          <Routes>
            <Route exact path="/" element={<Home/> } />
            <Route exact path="/login" element={<Login/> } />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/buy" element={<MerchSell/>} />
            <Route exact path="/contact" element={<Contactme/>} />
          </Routes>
       
        {/* //======================= */}
        {/* <Signup/>
        <Login/>  */}
        {/* <Listgames />
        <AddGame /> */}
      </div>
    );
  }
}
