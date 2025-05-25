import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="ChillZ logo" />
          </Link>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/boutique" onClick={closeMenu}>Boutique</Link></li>
          <li><Link to="/magasin" onClick={closeMenu}>Trouver un magasin</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/connexion" onClick={closeMenu}>Connexion</Link></li>
        </ul>

        <div className="menu-and-icons">
          <div className="nav-icons">
            <FaShoppingCart />
            <FaUser />
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}
