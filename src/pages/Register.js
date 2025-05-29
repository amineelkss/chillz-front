import React, { useState } from "react";
import canImage from "../assets/can-login.png";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [addressContent, setAddressContent] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { login } = useAuth();


  const handleSubmit = async (e) => {
      e.preventDefault();

      const newErrors = {};

      if (!acceptedTerms) {
          newErrors.terms = "Vous devez accepter les conditions.";
      }

      if (password !== confirmPassword) {
          newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
          return;
      }

      try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/user/register`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                  firstname,
                  lastname,
                  username,
                  birthdate,
                  address_title: 'Domicile',
                  address_content: addressContent,
                  phone,
                  email,
                  password
              }),
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

              setErrors(errorMap);

          } else {
              login(data.user, data.token);
              navigate('/shop');
              alert("Register réussie !");
          }
      } catch (err) {
          setErrors({ general: "Une erreur réseau est survenue. Veuillez réessayer plus tard." });
          console.error("Erreur réseau :", err);
      }
  };

  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row">
      {/* Left - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-8">Créer un compte</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="firstname" className="block text-sm font-medium mb-1">
                      Prénom
                  </label>
                  <input
                      id="firstname"
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
              </div>
              <div>
                  <label htmlFor="lastname" className="block text-sm font-medium mb-1">
                      Nom
                  </label>
                  <input
                      id="lastname"
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
              </div>
              <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-1">
                      Pseudo
                  </label>
                  <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
              </div>
              <div>
                  <label htmlFor="birthdate" className="block text-sm font-medium mb-1">
                      Date de naissance
                  </label>
                  <input
                      id="birthdate"
                      type="date"
                      value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.birthdate && <p className="text-red-500 text-sm mt-1">{errors.birthdate}</p>}
              </div>
              <div>
                  <label htmlFor="addressContent" className="block text-sm font-medium mb-1">
                      Addresse
                  </label>
                  <input
                      id="addressContent"
                      type="text"
                      value={addressContent}
                      onChange={(e) => setAddressContent(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.address_content && <p className="text-red-500 text-sm mt-1">{errors.address_content}</p>}
              </div>
              <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Téléphone
                  </label>
                  <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Confirmer votre mot de passe
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="**********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-center gap-2">
              <input
                id="terms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm">
                J'accepte les <a href="#" className="font-medium underline">conditions d'utilisations</a>
              </label>
            </div>
              {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

              <button
              type="submit"
              className="w-full bg-[#C32056] hover:bg-[#a91a48] text-white font-semibold py-2 rounded-full shadow disabled:opacity-50"
              disabled={!acceptedTerms}
            >
              Créer un compte
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Vous avez un compte ?{' '}
            <a href="/connexion" className="text-sky-500 font-medium hover:underline">
              Connexion
            </a>
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

export default Register;