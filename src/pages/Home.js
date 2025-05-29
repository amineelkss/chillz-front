import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CansSliderSection, CanDetailsSection, SubscriptionBanner } from "./HomeSections";
import canImage from "../assets/can.png";
import floatingCansImage from "../assets/cans-floating.png";
import chillzDrinkImage from "../assets/chillz-drink.png"; // Nouvelle image importée
import bgHeroImage from "../assets/bg-hero.png"; // Nouvelle image de fond

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white py-16 px-6 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHeroImage})` }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="z-10 text-left md:w-1/2 space-y-6">
            <img
              src={chillzDrinkImage}
              alt="ChillZ Drink Text"
              className="w-full max-w-md"
            />
            <Link
              to="/shop"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              Découvre la suite
            </Link>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-end">
            <img
              src={floatingCansImage}
              alt="Cans Hero"
              className="w-full max-w-full object-contain"
            />
          </div>
        </div>
      </section>



      <CansSliderSection />
      
      <CanDetailsSection />
      <SubscriptionBanner />

    </div>
  );
};

export default Home;
