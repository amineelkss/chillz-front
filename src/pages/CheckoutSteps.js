import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import bissapCanImage from "../assets/cartImageCanBissap.png";
import { useAuth } from "../contexts/AuthContext";
import AddressSelector from "../components/utils/AddressSelector";

export default function CheckoutSteps() {
  const [step, setStep] = useState(2);
  const { user } = useAuth();

  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    address_title: '',
    address_content: ''
  });

  // Quand l'adresse change dans AddressSelector, mettre à jour formValues
  const handleAddressChange = (address) => {
    setFormValues(prev => ({
      ...prev,
      address_title: address.address_title,
      address_content: address.address_content,
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
      <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <nav className="text-sm text-gray-500 mb-4">
            <span className={step === 2 ? 'text-pink-600 font-semibold' : ''}>Détails</span> {'>'} {' '}
            <span className={step === 3 ? 'text-pink-600 font-semibold' : ''}>Livraison</span> {'>'} {' '}
            <span className={step === 4 ? 'text-pink-600 font-semibold' : ''}>Paiement</span> {'>'} {' '}
            <span className={step === 5 ? 'text-pink-600 font-semibold' : ''}>Confirmation</span>
          </nav>

          {step === 2 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Adresse de livraison</h2>
                {user ? (
                    <div className="space-y-3">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Prénom"
                            value={formValues.firstname || ''}
                            onChange={(e) => setFormValues({ ...formValues, firstname: e.target.value })}
                            className="border rounded px-3 py-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Nom"
                            value={formValues.lastname || ''}
                            onChange={(e) => setFormValues({ ...formValues, lastname: e.target.value })}
                            className="border rounded px-3 py-2 w-full"
                        />
                      </div>

                      {user.addresses && user.addresses.length > 0 ? (
                          <AddressSelector
                              addresses={user.addresses}
                              onAddressChange={handleAddressChange}
                          />
                      ) : (
                          <input
                              type="text"
                              placeholder="Adresse"
                              value={formValues.address_content || ''}
                              onChange={(e) =>
                                  setFormValues({ ...formValues, address_content: e.target.value })
                              }
                              className="border rounded px-3 py-2 w-full"
                          />
                      )}
                      
                      <input
                          type="text"
                          placeholder="Numéro de téléphone"
                          value={formValues.phone || ''}
                          onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                          className="border rounded px-3 py-2 w-full"
                      />
                    </div>
                ) : (
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <input type="text" placeholder="Prénom" className="border rounded px-3 py-2 w-full" />
                          <input type="text" placeholder="Nom" className="border rounded px-3 py-2 w-full" />
                        </div>
                        <input type="text" placeholder="Adresse" className="border rounded px-3 py-2 w-full" />
                        <input type="text" placeholder="Numéro de téléphone" className="border rounded px-3 py-2 w-full" />
                        <label className="flex items-center gap-2">
                          <input type="checkbox" /> Sauvegarder les informations
                        </label>
                      </div>
                )}
                <button onClick={nextStep} className="ml-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-2 rounded-full shadow">Continuer
                </button>
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
            <button onClick={nextStep} className="ml-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-2 rounded-full shadow">Payer</button>
          </div>
        )}

        {step === 5 && (
          <div className="flex flex-col items-center text-center p-10 bg-green-50 rounded shadow-xl">
            <CheckCircle2 className="w-20 h-20 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-green-700 mb-2">Paiement validé !</h2>
            <p className="text-gray-600 mb-6">Merci pour votre commande. Vous recevrez un e-mail de confirmation sous peu.</p>
            <button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-full shadow">Retour à l'accueil</button>
          </div>
        )}
      </div>

      <div className="bg-yellow-50 p-6 rounded">
        <div className="flex items-center gap-4 mb-4">
          <img src={bissapCanImage} alt="Chill'Z Bisap" className="w-28" />
          <p className="text-lg font-medium">
            Chill'Z Bisap <span className="text-pink-600 font-semibold">10€</span>
          </p>
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value="CHILLZ15"
            className="border rounded px-3 py-2 w-full"
            readOnly
          />
          <button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-4 py-2 rounded-full shadow">
            Ajouter
          </button>
        </div>

        <div className="mt-6">
          <p>
            Sous-total: <span className="float-right text-pink-600">10€</span>
          </p>
          <p>
            Frais de livraison:{' '}
            <span className="float-right text-pink-600">
              {step >= 3 ? '3€' : 'Prochaine étape'}
            </span>
          </p>
          <p className="font-semibold mt-2">
            Total:{' '}
            <span className="float-right text-pink-600">
              {step >= 3 ? '13€' : '13€'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}