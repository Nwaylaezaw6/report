import React from "react";
import logo from "./Untitled.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <nav className="navbar">
            <div className="navleft">
                <img src={logo} className="logo" alt="logo"/>
            </div>
             <div className="navright">
                <ul>
                    <li className="nav-link"><Link to="/">Home</Link></li>
                    <li className="nav-link"><Link to="/about">About</Link></li>
                    <li className="nav-link"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
 )
}
export default Navbar;