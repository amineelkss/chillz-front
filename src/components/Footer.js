import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Communication</h3>
          <ul>
            <li>FAQ</li>
            <li>Nous contacter</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Informations générales</h3>
          <ul>
            <li>À propos de</li>
            <li>Mentions légales</li>
            <li>Conditions d’utilisations</li>
            <li>Cookies</li>
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
            <FaInstagram />
            <FaTiktok />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright Chillz</p>
      </div>
    </footer>
  );
}
