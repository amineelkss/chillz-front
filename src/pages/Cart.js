import React from "react";
import bissapCanImage from "../assets/cartImageCanBissap.png";

export default function Cart() {
  return (
    <div className="min-h-screen bg-white py-10 px-6 sm:px-12 lg:px-32">
      <h1 className="text-4xl font-bold text-center">
        Votre <span className="underline decoration-sky-400">panier</span>
      </h1>
      <p className="text-center text-sky-500 mt-4 text-lg">
        <a href="/boutique" className="hover:underline">
          Retour à la boutique
        </a>
      </p>

      <div className="mt-12">
        <div className="grid grid-cols-12 border-b pb-2 text-gray-700 text-sm font-semibold">
          <div className="col-span-6">Produits</div>
          <div className="col-span-3 text-center">Prix</div>
          <div className="col-span-3 text-right">Quantités</div>
        </div>

        <div className="grid grid-cols-12 items-center border-b py-6">
          <div className="col-span-6 flex items-center gap-4">
            <img
              src={bissapCanImage}
              alt="Chill'Z Bissap"
              className="w-24 h-auto rounded"
            />
            <div>
              <p className="text-lg font-semibold text-rose-800">Chill'Z Bissap</p>
              <button className="text-sky-500 text-sm hover:underline mt-1">
                Supprimer
              </button>
            </div>
          </div>
          <div className="col-span-3 text-center text-pink-600 font-bold">10€</div>
          <div className="col-span-3 flex justify-end items-center gap-2">
            <button className="border px-2 py-1 text-sky-500">-</button>
            <span className="border px-3 py-1">1</span>
            <button className="border px-2 py-1 text-sky-500">+</button>
          </div>
        </div>

        <div className="flex justify-end items-center mt-10 text-lg font-semibold">
          <span className="text-rose-800 mr-2">Total</span>
          <span className="text-rose-800">10€</span>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-gradient-to-r from-rose-500 to-red-800 text-white px-8 py-3 rounded-full shadow-md hover:opacity-90">
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
}
