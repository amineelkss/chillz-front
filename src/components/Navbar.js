import React from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src={logo} alt="ChillZ logo" /></Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/boutique">Boutique</Link></li>
        <li><Link to="/magasin">Trouver un magasin</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/connexion">Connexion</Link></li>
      </ul>
      <div className="nav-icons">
        <FaShoppingCart />
        <FaUser />
      </div>
    </nav>
  );
}
