import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { addToLocalCart } from "../components/utils/localCard";

const ProductPage = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [selectedFormat, setSelectedFormat] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`);
        const data = await res.json();
        setProduct(data);
        if (data.formats && data.formats.length > 0) {
          setSelectedFormat(data.formats[0]);
        }
      } catch (err) {
        console.error("Erreur lors du chargement du produit :", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!user) {
      addToLocalCart(product, quantity, selectedFormat);
      alert("Produit ajouté au panier !");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/card/${product.id}`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ quantity, formatId: selectedFormat?.id })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      alert("Produit ajouté au panier !");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-0 pb-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image + courbe */}
        <div className="lg:w-1/2 relative">
          <img src={`${process.env.REACT_APP_API_URL}${product.picture}`} alt="Produit ChillZ" className="rounded-bl-[80px] w-full" />
        </div>

        {/* Infos */}
        <div className="lg:w-1/2 flex flex-col justify-start gap-4 mt-6 lg:mt-12">
          <div className="flex items-start justify-between">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <span className="text-2xl text-[#C32056] font-bold">{selectedFormat?.price}€</span>
          </div>
          <div className="flex items-center gap-2">
            {Array(5).fill().map((_, i) => (
              <span key={i}>⭐</span>
            ))}
            <a href="#" className="text-sky-400 text-sm">(33 avis)</a>
          </div>
          <p className="text-gray-600">
            {product.description}
          </p>

          <div>
            <p className="font-semibold mb-2">Votre choix</p>
            <div className="flex gap-2">
              {product.formats?.map((format) => (
                  <button
                      key={format.id}
                      onClick={() => setSelectedFormat(format)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          selectedFormat?.id === format.id
                              ? "bg-[#7D0B2A] text-white"
                              : "bg-gray-200 text-gray-700"
                      }`}
                  >
                    {format.title}
                  </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">Quantité</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 px-3 py-1 rounded-full"
              >-</button>
              <span className="font-bold px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 px-3 py-1 rounded-full"
              >+</button>
            </div>
          </div>

          <button className="bg-[#C32056] text-white mt-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#a91a48] transition"
                  onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>

      {/* Tableau des infos nutritionnelles */}
      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Calories</h2>
            <span className="text-base font-medium">33cl</span>
          </div>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-100">
              {[
                ["Matières grasses", `${product.fats || 0}g`],
                ["Dont acides gras saturés", `${product.fatsSaturated || 0}g`],
                ["Glucides", `${product.carbohydrates || 0}g`],
                ["Dont sucres", `${product.carbohydratesSugar || 0}g`],
                ["Protéines", `${product.proteins || 0}g`],
                ["Sel", `${product.salt || 0}g`],
                ["Énergie", `${product.energy || 0}Kcal`]
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="py-2 font-medium text-gray-700">{label}</td>
                  <td className="py-2 text-gray-600 text-right">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <p className="text-sm font-medium mb-2">Ingrédient :</p>
          <p className="text-sm text-gray-700 mb-4">{product.ingredients || "Eau, infusion de fleurs d’hibiscus, sucre de canne, jus de citron, gingembre."}</p>
          <p className="text-sm font-medium mb-2">Traces éventuelles :</p>
          <p className="text-sm text-gray-700">{product.traces || "Gluten, fruits à coque, soja, lait, œufs, céleri"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;