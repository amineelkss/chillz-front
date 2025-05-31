import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Communication</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Nous contacter</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Informations générales</h3>
          <ul>
            <li><Link to="/about">À propos de</Link></li>
            <li><Link to="/mentionslegales">Mentions légales</Link></li>
            <li><Link to="/conditionsutilisation">Conditions d’utilisation</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h3>Notre newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button>s’abonner</button>
          </div>
          <p className="email">chillz@adressemail.com</p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="TikTok"><FaTiktok /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chillz. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
