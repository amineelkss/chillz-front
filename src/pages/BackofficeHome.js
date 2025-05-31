import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

import BackofficeLayout from '../components/layouts/BackOfficeLayout';
import BackofficeCard from '../components/BackOfficeCard';

const BackofficeHome = () => {

    const { user } = useAuth();

    return (
        <BackofficeLayout>
            <header className="mb-12 text-center">
                <h1 className="text-5xl font-extrabold text-pink-600 mb-4">
                    Backoffice
                </h1>
                <p className="text-xl text-pink-800/90">
                    Bienvenue {user?.username || "utilisateur"}
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Gestion Produits */}
                <BackofficeCard
                    to="/backoffice/products"
                    title="Produits"
                    description="Créez, modifiez, activez/désactivez ou supprimez les produits de la boutique."
                />

                    {/* Gestion Commandes */}
                <BackofficeCard
                    to="/backoffice/orders"
                    title="Commandes"
                    description="Suivez et gérez les commandes passées par les clients."
                />

                {/* Gestion Magasins */}
                <BackofficeCard
                    to="/backoffice/stores"
                    title="Magasins"
                    description="Créez, modifiez, activez/désactivez ou supprimez les magasins revendeurs."
                />

                {/* Gestion News */}
                <BackofficeCard
                    to="/backoffice/news"
                    title="Actualités"
                    description="Créez, modifiez, activez/désactivez ou supprimez les actualités du site."
                />

                {/* Gestion FAQ */}
                <BackofficeCard
                    to="/backoffice/faqs"
                    title="FAQ"
                    description="Créez, modifiez, activez/désactivez ou supprimez les questions de la FAQ du site."
                />

                {/* Gestion Avis */}
                <BackofficeCard
                    to="/backoffice/opinions"
                    title="FAQ"
                    description="Gérez les avis publiés par les clients sur les produits du site."
                />
            </section>
        </BackofficeLayout>
    )
};

export default BackofficeHome;
