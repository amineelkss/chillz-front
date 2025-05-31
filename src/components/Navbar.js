import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logout from "../pages/Logout";
import logo from "../assets/logo.png";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="ChillZ logo" />
            </Link>
          </div>

          <div className="user-status">
            {user ? `Utilisateur : ${user.username}` : "Non connecté"}
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
            <li><Link to="/shop" onClick={closeMenu}>Boutique</Link></li>
            <li><Link to="/magasin" onClick={closeMenu}>Trouver un magasin</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
              {user?.role === 'ADMIN' && (
                  <li><Link to="/backoffice" onClick={closeMenu}>Backoffice</Link></li>
              )}
            {user ? (
              <li>
                <button
                  onClick={() => setShowLogout(true)}
                  className="logout-button"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "inherit",
                    font: "inherit",
                    padding: 0,
                  }}
                >
                  Déconnexion
                </button>
              </li>
            ) : (
              <li><Link to="/login" onClick={closeMenu}>Connexion</Link></li>
            )}
          </ul>

          <div className="menu-and-icons">
            <div className="nav-icons">
              <Link to="/cart" onClick={closeMenu} className="nav-icon">
                <FaShoppingCart />
              </Link>
              <Link to={user ? "/" : "/login"} onClick={closeMenu} className="nav-icon">
                <FaUser />
              </Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
      {showLogout && <Logout onClose={() => setShowLogout(false)} />}
    </>
  );
}