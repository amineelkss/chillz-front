import React from "react";

export default function Cookies() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center border-b-4 pb-2 border-pink-500 inline-block">Cookies</h1>

      <section className="mb-6">
        <p>
          Parce que chez <strong>CHILL’Z</strong>, on aime les bons goûts — même en ligne — on t’explique ici tout ce qu’il faut savoir sur les cookies (ceux du web, pas ceux de tata).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. C’est quoi un cookie ?</h2>
        <p>
          Un cookie, c’est un petit fichier texte enregistré sur ton ordi, ton téléphone ou ta tablette quand tu navigues sur un site. Il permet de garder en mémoire certaines infos, comme ta langue, les produits dans ton panier ou tes préférences de navigation. Pas de panique : un cookie ne te piste pas personnellement, ne contient aucun virus, et ne peut pas lire dans tes pensées.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Pourquoi on utilise des cookies sur chillzdrink.com ?</h2>
        <p>
          On utilise des cookies pour 3 grandes raisons :
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>Améliorer ton expérience sur le site (ex : retenir ce que t’as mis dans ton panier ou tes choix de langue).</li>
          <li>Mesurer notre audience de façon anonyme, pour savoir ce qui plaît, ce qui marche, et comment rendre le site encore plus cool.</li>
          <li>Te proposer du contenu adapté, comme des recommandations de produits, ou des pubs qui ne tombent pas à côté de la plaque (quand tu es ok avec ça).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Est-ce que tu peux les gérer ou les refuser ?</h2>
        <p>
          Bien sûr ! À tout moment, tu peux :
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>Accepter ou refuser tout ou partie des cookies depuis notre bannière de consentement dès ton arrivée sur le site.</li>
          <li>Modifier tes choix via un lien “Gérer mes cookies” (en bas de page).</li>
          <li>Configurer ton navigateur pour bloquer ou supprimer les cookies (Chrome, Firefox, Safari, etc.).</li>
        </ul>
        <p className="mt-2">
          Attention : refuser les cookies nécessaires peut rendre certaines fonctionnalités du site indisponibles (genre le panier ou la commande 😢).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Tes droits</h2>
        <p>
          Tu as le droit d’accéder, de modifier ou de supprimer les données collectées via les cookies. Tu peux nous contacter à tout moment à <a href="mailto:hello@chillzdrink.com" className="text-pink-600 underline">hello@chillzdrink.com</a> pour exercer tes droits ou poser une question.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Mise à jour</h2>
        <p>
          Cette politique peut évoluer si nos pratiques changent ou si la réglementation l’exige. Dernière mise à jour : 31 mai 2025.
        </p>
      </section>
    </div>
  );
}
