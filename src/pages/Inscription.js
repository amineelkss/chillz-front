import React, { useState } from "react";
import canImage from "../assets/can-login.png";

const Inscription = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row">
      {/* Left - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-8">Créer un compte</h1>

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
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Confirmer votre mot de passe
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                id="terms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm">
                J'accepte les <a href="#" className="font-medium underline">conditions d'utilisations</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C32056] hover:bg-[#a91a48] text-white font-semibold py-2 rounded-full shadow disabled:opacity-50"
              disabled={!acceptedTerms}
            >
              Créer un compte
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Vous avez déjà un compte ?{' '}
            <a href="/connexion" className="text-sky-500 font-medium hover:underline">
              Se connecter
            </a>
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

export default Inscription;