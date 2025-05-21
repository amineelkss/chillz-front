import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import cansSlideImage from "../assets/cans-slide.png";
import centerCanImage from "../assets/can-center.png";
import bannerBg from "../assets/banner-bg.png";

export const CansSliderSection = () => (
  <section className="bg-white py-20 px-6 relative">
    <div className="max-w-6xl mx-auto relative">
      {/* Flèches positionnées au bord de la box */}
      <button className="hidden md:flex absolute -left-6 top-1/2 transform -translate-y-1/2 p-3 bg-pink-100 rounded-full hover:bg-pink-200 shadow">
        <ArrowLeft className="text-pink-500" />
      </button>
      <button className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2 p-3 bg-pink-100 rounded-full hover:bg-pink-200 shadow">
        <ArrowRight className="text-pink-500" />
      </button>

      <div className="rounded-3xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-10">
        <img
          src={cansSlideImage}
          alt="Cans Slide"
          className="w-full md:w-1/2 object-contain"
        />
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4">Lorem ipsum</h2>
          <p className="mb-6 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <button className="bg-[#C32056] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#aa1846] transition">
            Découvrir
          </button>
        </div>
      </div>
    </div>
  </section>
);

export const CanDetailsSection = () => (
  <section className="bg-white py-20 px-6">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-extrabold mb-4">Notre <span className="underline decoration-sky-400">canette</span></h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="md:w-1/3 text-right">
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-2">Lorem ipsum</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Lorem ipsum</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </div>

      <div className="md:w-1/3 flex justify-center">
        <img
          src={centerCanImage}
          alt="ChillZ Can Center"
          className="w-64"
        />
      </div>

      <div className="md:w-1/3 text-left">
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-2">Lorem ipsum</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Lorem ipsum</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </div>
    </div>
  </section>
);

export const SubscriptionBanner = () => (
  <section className="py-20 px-6">
    <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden text-white bg-cover bg-center p-6 md:p-12" style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Abonnez-vous pour bénéficier d'une remise de 20 %
        </h2>
        <form className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 bg-white rounded-full p-1 w-full max-w-xl mx-auto">
          <div className="flex-grow min-w-0">
            <input
              type="email"
              placeholder="Adresse email"
              className="w-full px-4 py-2 rounded-full outline-none text-black"
            />
          </div>
          <div className="shrink-0">
            <button
              type="submit"
              className="bg-[#C32056] text-white font-semibold px-6 py-2 rounded-full whitespace-nowrap"
            >
              Button
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);