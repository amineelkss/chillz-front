import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import cannettePNG from "../assets/canette.png";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/product`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Erreur de chargement des produits :", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        Notre <span className="underline decoration-sky-400">boutique</span>
      </h1>

      {products.length >= 2 && (
        <div className="text-sm space-y-1 mt-4">
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
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col aspect-[3/4]">
            <Link
              to={`/product/${product.id}`}
              className="flex-1 flex items-center justify-center overflow-hidden"
            >
              <img
                src={cannettePNG}
                alt={product.title}
                className="h-full w-full object-contain block" // ✅ Ajout de "w-full" et "block"
              />
            </Link>
            <div className="text-sm mt-2"> {/* mt-2 au lieu de mt-4 pour réduire l'espace */}
              <div className="flex justify-between">
                <p className="font-medium truncate">{product.title}</p>
                <p className="text-blue-400 text-xs">({product.quantity}ml)</p>
              </div>
              <div className="flex justify-end">
                <p className="text-pink-600 text-sm mt-1">€</p>
                <p className="text-pink-600 text-sm mt-1">
                  {product.formats && product.formats.length > 0 ? `${parseFloat(product.formats[0].price).toFixed(2)}€` : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>


      {products.length > 6 && (
        <div className="text-center">
          <Link to="/product">
            <button className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-full shadow">
              Voir plus
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
