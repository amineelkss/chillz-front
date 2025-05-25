import React from "react";
import canImage from "../assets/can-login.png";
import { Link } from "react-router-dom";

const Connexion = () => {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row">
      {/* Left - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-8">Bienvenue !</h1>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Mot de passe
                </label>
                <a href="#" className="text-xs text-sky-500 hover:underline">
                  Mot de passe oublié
                </a>
              </div>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C32056] hover:bg-[#a91a48] text-white font-semibold py-2 rounded-full shadow"
            >
              Connexion
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Vous n'avez pas de compte ?{' '}
            <Link to="/inscription" className="text-sky-500 font-medium hover:underline">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="w-full md:w-1/2">
        <img src={canImage} alt="Canette ChillZ" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Connexion;
