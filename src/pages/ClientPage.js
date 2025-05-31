import React, { useState } from 'react';

const ClientPage = () => {
  const [activeTab, setActiveTab] = useState('compte');

  const renderTabContent = () => {
    const inputClass = "border rounded-md p-2 mt-1";

    switch (activeTab) {
      case 'compte':
        return (
          <form className="space-y-4">
            <h2 className="text-xl font-semibold">Informations</h2>
            <div className="flex flex-col">
              <label>Prénom*</label>
              <input type="text" placeholder="Prénom" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Nom*</label>
              <input type="text" placeholder="Nom" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Email*</label>
              <input type="email" placeholder="Email" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Date de naissance*</label>
              <input type="date" className={inputClass} />
            </div>

            <h2 className="text-xl font-semibold mt-6">Mot de passe</h2>
            <div className="flex flex-col">
              <label>Mot de passe</label>
              <input type="password" placeholder="Mot de passe" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Nouveau mot de passe</label>
              <input type="password" placeholder="Nouveau mot de passe" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Confirmer le nouveau mot de passe</label>
              <input type="password" placeholder="Nouveau mot de passe" className={inputClass} />
            </div>

            <button type="submit" className="bg-[#b41f34] text-white px-6 py-2 rounded-full mt-4 shadow">Modifier</button>
          </form>
        );
      case 'adresse':
        return (
          <form className="space-y-4">
            <h2 className="text-xl font-semibold">Adresse</h2>
            <div className="flex flex-col">
              <label>Adresse*</label>
              <input type="text" placeholder="Adresse" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Complément d’adresse</label>
              <input type="text" placeholder="Complément" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Ville*</label>
              <input type="text" placeholder="Ville" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Code postal*</label>
              <input type="text" placeholder="Code postal" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Pays*</label>
              <input type="text" placeholder="Pays" className={inputClass} />
            </div>
            <button type="submit" className="bg-[#b41f34] text-white px-6 py-2 rounded-full mt-4 shadow">Modifier</button>
          </form>
        );
      case 'paiement':
        return (
          <form className="space-y-4">
            <h2 className="text-xl font-semibold">Mode de paiement</h2>
            <div className="flex flex-col">
              <label>Numéro de carte*</label>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Nom sur la carte*</label>
              <input type="text" placeholder="Nom" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Date d'expiration*</label>
              <input type="month" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label>Cryptogramme*</label>
              <input type="text" placeholder="CVV" className={inputClass} />
            </div>
            <button type="submit" className="bg-[#b41f34] text-white px-6 py-2 rounded-full mt-4 shadow">Modifier</button>
          </form>
        );
      case 'historique':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Historique de commande</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Commande #1234 - 25/05/2025 - 49,99€</li>
              <li>Commande #1220 - 10/05/2025 - 24,90€</li>
              <li>Commande #1189 - 22/04/2025 - 89,00€</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-[80px] pt-[60px] pb-[100px] font-sans">
      <h1 className="text-4xl font-extrabold mb-6 border-b-4 border-cyan-400 inline-block pb-1">Mes informations</h1>
      <div className="flex flex-col md:flex-row gap-[60px] mt-8">
        <aside className="w-full md:w-[220px] bg-pink-100 rounded-xl px-4 py-6">
          <ul className="space-y-4 text-[15px]">
            <li
              className={`cursor-pointer pb-1 border-b ${activeTab === 'compte' ? 'text-red-700 font-bold border-red-700' : 'text-gray-600'}`}
              onClick={() => setActiveTab('compte')}
            >
              Compte
            </li>
            <li
              className={`cursor-pointer ${activeTab === 'adresse' ? 'text-red-700 font-bold' : 'text-gray-600'}`}
              onClick={() => setActiveTab('adresse')}
            >
              Adresse
            </li>
            <li
              className={`cursor-pointer ${activeTab === 'paiement' ? 'text-red-700 font-bold' : 'text-gray-600'}`}
              onClick={() => setActiveTab('paiement')}
            >
              Mode de paiement
            </li>
            <li
              className={`cursor-pointer ${activeTab === 'historique' ? 'text-red-700 font-bold' : 'text-gray-600'}`}
              onClick={() => setActiveTab('historique')}
            >
              Historique de commande
            </li>
            <li className="text-gray-500 cursor-pointer">Se déconnecter</li>
          </ul>
        </aside>
        <main className="w-full md:flex-1">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default ClientPage;