import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PublicRoute from "./components/PublicRoute";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Magasin from "./pages/Magasin";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Product from "./pages/Product";
import Register from "./pages/Register";

import { AuthProvider } from "./contexts/AuthContext";


function App() {
  return (
      <AuthProvider>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} /> {/* Home devient la route racine */}
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/magasin" element={<Magasin />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                  <Route path="/logout"  element={<Logout />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/register" element={<PublicRoute><Register /></PublicRoute> } />
              </Routes>
              <Footer />
          </Router>
      </AuthProvider>
  );
}

export default App;
