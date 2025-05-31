import React from 'react';
import bgHeroImage from "../../assets/bg-hero.png";

const BackofficeLayout = ({ children }) => {
    return (
        <div
            className="min-h-screen py-16 px-6 relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${bgHeroImage})` }}
        >
            <div className="max-w-7xl mx-auto bg-white/80 rounded-3xl p-12 shadow-lg backdrop-blur-md">
                {children}
            </div>
        </div>
    );
};

export default BackofficeLayout;
