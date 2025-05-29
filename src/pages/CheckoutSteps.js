import React, { useState } from 'react';
import bissapCanImage from "../assets/cartImageCanBissap.png";

export default function CheckoutSteps() {
  const [step, setStep] = useState(2); // Commence à l'étape 2 (Détails)

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <nav className="text-sm text-gray-500 mb-4">
          <span className={step === 2 ? 'text-pink-600 font-semibold' : ''}>Détails</span> {'>'} {' '}
          <span className={step === 3 ? 'text-pink-600 font-semibold' : ''}>Livraison</span> {'>'} {' '}
          <span className={step === 4 ? 'text-pink-600 font-semibold' : ''}>Paiement</span>
        </nav>

        {step === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Adresse de livraison</h2>
            <form className="space-y-3">
              <div className="flex gap-2">
                <input type="text" placeholder="Prénom" className="border rounded px-3 py-2 w-full" />
                <input type="text" placeholder="Nom" className="border rounded px-3 py-2 w-full" />
              </div>
              <input type="text" placeholder="Adresse" className="border rounded px-3 py-2 w-full" />
              <input type="text" placeholder="Numéros de téléphone" className="border rounded px-3 py-2 w-full" />
              <div className="flex gap-2">
                <select className="border rounded px-3 py-2 w-full">
                  <option>France</option>
                </select>
                <input type="text" placeholder="Ville" className="border rounded px-3 py-2 w-full" />
                <input type="text" placeholder="Code postal" className="border rounded px-3 py-2 w-full" />
              </div>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Sauvegarder les informations
              </label>
            </form>
            <button onClick={prevStep} className="text-sky-500 mt-4">Retour</button>
            <button onClick={nextStep} className="ml-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-2 rounded-full shadow">Continuer</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Méthode de livraison</h2>
            <div className="border rounded p-4 flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="radio" checked readOnly className="accent-pink-600" />
                Livraison à domicile
              </label>
              <span className="text-pink-600 font-semibold">3€</span>
            </div>
            <button onClick={prevStep} className="text-sky-500 mt-4">Retour</button>
            <button onClick={nextStep} className="ml-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-2 rounded-full shadow">Continuer</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Méthode de paiement</h2>
            <div className="border rounded p-4">
              <div className="bg-pink-100 p-2 rounded-t flex items-center gap-2">
                <span className="bg-pink-600 text-white p-1 rounded"><i className="fas fa-credit-card"></i></span>
                <span className="font-semibold text-pink-600">Carte de crédit</span>
              </div>
              <div className="p-4 space-y-3">
                <input type="text" placeholder="Numéro de la carte" className="border rounded px-3 py-2 w-full" />
                <input type="text" placeholder="Nom du titulaire" className="border rounded px-3 py-2 w-full" />
                <div className="flex gap-2">
                  <input type="text" placeholder="(MM/AA)" className="border rounded px-3 py-2 w-full" />
                  <input type="text" placeholder="CVV" className="border rounded px-3 py-2 w-full" />
                </div>
              </div>
            </div>
            <button onClick={prevStep} className="text-sky-500 mt-4">Retour</button>
            <button className="ml-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-2 rounded-full shadow">Payer</button>
          </div>
        )}
      </div>

      {/* Colonne droite toujours visible */}
      <div className="bg-yellow-50 p-6 rounded">
        <img src={bissapCanImage} alt="Chill'Z Bisap" className="mb-4 w-28" />
        <p>Chill'Z Bisap <span className="text-pink-600 font-semibold">10€</span></p>
        <div className="mt-4 flex gap-2">
          <input type="text" value="CHILLZ15" className="border rounded px-3 py-2 w-full" readOnly />
          <button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-4 py-2 rounded-full shadow">Ajouter</button>
        </div>
        <div className="mt-6">
          <p>Sous-total: <span className="float-right text-pink-600">10€</span></p>
          <p>Frais de livraison: <span className="float-right text-pink-600">{step >= 3 ? '3€' : 'Prochaine étape'}</span></p>
          <p className="font-semibold mt-2">Total: <span className="float-right text-pink-600">{step >= 3 ? '13€' : '13€'}</span></p>
        </div>
      </div>
    </div>
  );
}