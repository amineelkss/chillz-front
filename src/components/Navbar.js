import React from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Chill'Z</div>
      <ul className="nav-links">
        <li>Boutique</li>
        <li>Trouver un magasin</li>
        <li>Contact</li>
        <li>Connexion</li>
      </ul>
      <div className="nav-icons">
        <FaShoppingCart />
        <FaUser />
      </div>
    </nav>
  );
}
