import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#e5366a] text-white pt-8 font-sans w-full mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-between gap-8 text-center md:text-left">
        {/* Colonne Communication */}
        <div className="w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-4">Communication</h3>
          <ul className="space-y-2 text-sm font-bold">
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/contact" className="hover:underline">Nous contacter</Link></li>
          </ul>
        </div>

        {/* Colonne Informations */}
        <div className="w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-4">Informations générales</h3>
          <ul className="space-y-2 text-sm font-bold">
            <li><Link to="/about" className="hover:underline">À propos de</Link></li>
            <li><Link to="/mentionslegales" className="hover:underline">Mentions légales</Link></li>
            <li><Link to="/conditionsutilisation" className="hover:underline">Conditions d’utilisation</Link></li>
            <li><Link to="/cookies" className="hover:underline">Cookies</Link></li>
          </ul>
        </div>

        {/* Colonne Newsletter */}
        <div className="w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-4">Notre newsletter</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mb-3 gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-full w-44 text-black focus:outline-none"
            />
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-black font-bold">
              s’abonner
            </button>
          </div>
          <p className="text-sm mb-3">infochillz.drink@gmail.com</p>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a
              href="https://www.instagram.com/chillz.drink?igsh=MWxoOWZ6Mzg2MHNxNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@chillzdrink?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-yellow-300"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.linkedin.com/in/chill-z-drink-711087364/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page pleine largeur */}
      <div className="w-full bg-[#a5193f] text-center py-3 mt-8 text-sm font-bold">
        &copy; {new Date().getFullYear()} Chillz. Tous droits réservés.
      </div>
    </footer>
  );
}