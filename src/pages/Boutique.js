import React from "react";
import { ChevronDown, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import cannettePNG from "../assets/canette.png";

const categories = ["Afrique", "Europe", "Asie", "Océanie", "Amérique"];
const products = Array.from({ length: 9 }, (_, i) => ({ id: i, name: "Lorem Ipsum", size: "330ml", price: "2€", rating: 4 }));

export default function Boutique() {
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        Notre <span className="underline decoration-sky-400">boutique</span>
      </h1>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Nos <span className="underline">catégories</span></span>
          <div className="flex space-x-2">
            {categories.map((cat, i) => (
              <div key={i} className="bg-pink-100 rounded-full p-3 cursor-pointer">
                <Globe className="w-6 h-6 text-pink-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-sm space-y-1">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-gray-600">Trier</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <ul className="text-xs text-gray-500 space-y-0.5">
            <li>Par prix</li>
            <li>Par nom</li>
            <li>Par nouveautés</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
        {products.map((product) => (
          <div key={product.id} className="relative flex flex-col items-center">
            <div className="relative w-[180px] h-[240px] flex justify-center">
              <div className="absolute top-0 w-full h-3/5 bg-orange-50 rounded-xl"></div>
              <img 
                src={cannettePNG} 
                alt="Chill'Z" 
                className="absolute -top-10 w-28 h-56 object-contain z-10"
              />
            </div>
            <div className="w-full px-1 mt-4 text-sm">
              <div className="flex justify-between">
                <p className="font-medium">{product.name}</p>
                <p className="text-blue-400 text-xs">{product.size}</p>
              </div>
              <div className="flex justify-start text-yellow-500 text-xs mt-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < product.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <div className="flex justify-end">
                <p className="text-pink-600 text-sm mt-1">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/product">
          <button className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-full shadow">
            Voir plus
          </button>
        </Link>
      </div>

    </div>
  );
}