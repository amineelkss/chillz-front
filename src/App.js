import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Ajout de l'import de la page Home
import Boutique from "./pages/Boutique";
import Magasin from "./pages/Magasin";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home devient la route racine */}
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/magasin" element={<Magasin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
