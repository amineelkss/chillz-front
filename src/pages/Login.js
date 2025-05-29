import React, { useState } from "react";
import canImage from "../assets/can-login.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        const errorMap = {};
        if (data.errors && Array.isArray(data.errors)) {
          data.errors.forEach((err) => {
            if (!errorMap[err.path]) {
              errorMap[err.path] = [];
            }
            errorMap[err.path].push(err.msg);
          });
        }

        if (!data.errors && data.message) {
          errorMap.general = data.message;
        }

        setErrors(errorMap);

      } else {
        login(data.user);
        navigate("/shop");
        alert("Login réussie !");
      }
    } catch (error) {
      setErrors({ general: "Erreur réseau, veuillez réessayer." });
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row">
      {/* Left - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-8">Bienvenue !</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Mot de passe
                </label>
                <a href="#" className="text-xs text-sky-500 hover:underline">
                  Mot de passe oublié
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="**********"
                value={password}                // à ajouter
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {errors.general && (
                <p className="text-red-500 text-sm text-center mb-4">{errors.general}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#C32056] hover:bg-[#a91a48] text-white font-semibold py-2 rounded-full shadow"
            >
              Connexion
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Vous n'avez pas de compte ?{' '}
            <Link to="/register" className="text-sky-500 font-medium hover:underline">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="w-full md:w-1/2">
        <img src={canImage} alt="Canette ChillZ" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
