import React from "react";
import "./Footer.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Communication</h3>
        <p>FAQ</p>
        <p>Nous contacter</p>
      </div>
      <div className="footer-column">
        <h3>Informations générales</h3>
        <p>À propos de</p>
        <p>Mentions légales</p>
        <p>Conditions d’utilisations</p>
      </div>
      <div className="footer-column">
        <h3>Notre newsletter</h3>
        <div className="newsletter">
          <input type="email" placeholder="Email" />
          <button>s’abonner</button>
        </div>
        <p>chillz@adressemail.com</p>
        <div className="social-icons">
          <FaInstagram />
          <FaTiktok />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright Chillz</p>
      </div>
    </footer>
  );
}
