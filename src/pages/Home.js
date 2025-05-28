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

      {/* Bangers Section */}
      <section className="py-16 px-6 bg-white">
        <div className="flex justify-center">
          <div className="w-full max-w-[calc(5*12rem+4*1rem+2rem)]"> {/* 5 cards * 48 (12rem), 4 gaps * 1rem, padding */}
            <div className="flex justify-between items-center px-4 mb-10">
              <h2 className="text-3xl font-bold text-left">
                Nos <span className="underline decoration-pink-500">bangers</span>
              </h2>
              <div className="flex gap-4">
                <button className="p-2 bg-pink-100 rounded-full hover:bg-pink-200">
                  <ArrowLeft className="text-pink-500" />
                </button>
                <button className="p-2 bg-pink-100 rounded-full hover:bg-pink-200">
                  <ArrowRight className="text-pink-500" />
                </button>
              </div>
            </div>

            <div className="flex overflow-x-auto space-x-4 px-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-48 flex-shrink-0 p-4 rounded-2xl shadow-md flex flex-col items-center justify-center ${
                    i === 2 ? "bg-orange-100 border-4 border-orange-300" : "bg-white"
                  }`}
                >
                  <img
                    src={canImage}
                    alt="ChillZ Can"
                    className={`object-contain ${
                      i === 2 ? "w-24 mb-4" : "w-full h-full"
                    }`}
                  />
                  {i === 2 && (
                    <>
                      <p className="text-sm font-medium">Lorem Ipsum</p>
                      <p className="text-md font-semibold">2€</p>
                      <button className="mt-2 bg-yellow-500 text-white py-1 px-3 rounded-full">
                        Voir
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
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
