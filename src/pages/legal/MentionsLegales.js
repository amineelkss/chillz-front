import React from "react";

const MentionsLegales = () => {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b-4 border-cyan-400 inline-block pb-1">
        Mentions légales
      </h1>
      <p className="mb-6">
        Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004
        pour la Confiance dans l’économie numérique (LCEN), nous t’informons ici de tout ce que tu
        dois savoir légalement en visitant notre site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Éditeur du site</h2>
      <p>
        Le site chillzkart.com est édité par :<br />
        CHILLZ (forme juridique à préciser : ex. SAS / auto-entreprise)<br />
        Siège social : [adresse complète]<br />
        SIRET : [numéro]<br />
        Responsable de la publication : [le cas échéant]<br />
        Email : hello@chillzkart.com<br />
        Directeur·rice de la publication : [nom et prénom du responsable légal de la société]
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Hébergement</h2>
      <p>
        Le site est hébergé par :<br />
        [Nom de l’hébergeur : ex. OVH, Infomaniak, Webflow, Shopify, etc.]<br />
        Adresse [adresse complète de l’hébergeur]<br />
        Téléphone : [numéro]<br />
        Site web : [l’url de l’hébergeur]
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Données personnelles & cookies</h2>
      <p>
        CHILLZ s’engage à protéger tes données. On collecte uniquement les infos nécessaires à
        ton confort de navigation et à l’amélioration du site, comme la mesure de la formule de
        navigation (Google Analytics).<br /><br />
        Tu peux refuser l’utilisation de certains cookies via le paramétrage de ton navigateur.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Propriété intellectuelle</h2>
      <p>
        Tous les contenus présents sur le site chillzkart.com (textes, visuels, vidéos, logo,
        illustrations, etc.) sont la propriété exclusive de CHILLZ ou font l’objet d’une licence
        d’utilisation.<br />
        Toute reproduction, même partielle, sans notre accord est strictement interdite.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Droit applicable</h2>
      <p>
        Les présentes mentions sont régies par le droit français. En cas de litige, les tribunaux
        compétents seront ceux du siège social de l’entreprise CHILLZ, sauf disposition légale
        contraire.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Merci de respecter notre travail, notre univers et notre passion.</h2>
      <p>
        CHILLZ c’est plus qu’un business. C’est une vibe, un héritage et un kiff partagé. Merci de
        faire partie de l’aventure ❤️
      </p>
    </div>
  );
};

export default MentionsLegales;
