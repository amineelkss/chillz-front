import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getLocalCart, updateLocalCartQuantity, removeFromLocalCart, calculateLocalCartTotal } from "../components/utils/localCard";

export default function Cart() {
  const { user } = useAuth();
  const [cart, setCart] = useState({ cards: [], price: 0 });

  const fetchCart = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/card`, {
        credentials: "include",
      });
      const data = await res.json();
      setCart(data);
    } catch (error) {
      console.error("Erreur chargement panier :", error);
    }
  };

  useEffect(() => {
    if (!user) {
      const localCart = getLocalCart();
      const total = localCart.reduce((sum, item) => {
        return sum + item.format.price * item.quantity;
      }, 0);

      setCart({ cards: localCart, price: total });
      return;
    }

    fetchCart();
  }, [user]);

  const updateQuantity = async (productId, formatId, newQuantity) => {
    if (newQuantity < 0) return; // Pas de quantités négatives

    if (!user) {
      // localStorage
      const updatedCart = updateLocalCartQuantity(productId, formatId, newQuantity);
      const total = calculateLocalCartTotal(updatedCart);
      setCart({ cards: updatedCart, price: total });
    } else {
      // API
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/card/update/${productId}`, {
          method: "PATCH",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: newQuantity, formatId: formatId }),
        });

        if (!res.ok) throw new Error("Erreur mise à jour panier");

        await fetchCart();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const removeItem = async (productId, formatId) => {
    if (!user) {
      // localStorage
      const updatedCart = removeFromLocalCart(productId, formatId);
      const total = calculateLocalCartTotal(updatedCart);
      setCart({ cards: updatedCart, price: total });
    } else {
      // API (mettre quantité à 0 pour supprimer)
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/card/delete/${productId}`, {
          method: "DELETE",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: 0 }),
        });

        if (!res.ok) throw new Error("Erreur suppression panier");

        await fetchCart();

      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-10 px-6 sm:px-12 lg:px-32">
      <h1 className="text-4xl font-bold text-center">
        Votre <span className="underline decoration-sky-400">panier</span>
      </h1>
      <p className="text-center text-sky-500 mt-4 text-lg">
        <a href="/shop" className="hover:underline">
          Retour à la boutique
        </a>
      </p>

      <div className="mt-12">
        <div className="grid grid-cols-12 border-b pb-2 text-gray-700 text-sm font-semibold">
          <div className="col-span-6">Produits</div>
          <div className="col-span-3 text-center">Prix</div>
          <div className="col-span-3 text-right">Quantités</div>
        </div>

        {cart.cards.map((item) => (
            <div key={item.id} className="grid grid-cols-12 items-center border-b py-6">
              <div className="col-span-6 flex items-center gap-4">
                <img src={`${process.env.REACT_APP_API_URL}${item.product.picture}`}
                     alt={item.product.title}
                  className="w-24 h-auto rounded"
                />
                <div>
                  <p className="text-lg font-semibold text-rose-800">{item.product.title}</p>
                  <p className="text-sm text-gray-500 italic mt-1">{item.format.title}</p>
                  <button className="text-sky-500 text-sm hover:underline mt-1"
                          onClick={() => removeItem(item.product.id, item.format.id)}>
                    Supprimer
                  </button>
                </div>
              </div>
              <div className="col-span-3 text-center text-pink-600 font-bold">{(item.format.price * item.quantity).toFixed(2)}€</div>
              <div className="col-span-3 flex justify-end items-center gap-2">
                <button className="border px-2 py-1 text-sky-500"
                        onClick={() => updateQuantity(item.product.id, item.format.id, item.quantity - 1)}
                >-</button>
                <span className="border px-3 py-1">{item.quantity}</span>
                <button className="border px-2 py-1 text-sky-500"
                        onClick={() => updateQuantity(item.product.id, item.format.id, item.quantity + 1)}
                >+</button>
              </div>
            </div>
        ))}

        <div className="flex justify-end items-center mt-10 text-lg font-semibold">
          <span className="text-rose-800 mr-2">Total</span>
          <span className="text-rose-800">{cart.price.toFixed(2)}€</span>
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
