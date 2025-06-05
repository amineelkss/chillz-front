import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Magasin from "./pages/Magasin";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import CheckoutSteps from "./pages/CheckoutSteps";
import BackofficeHome from "./pages/BackofficeHome";
import ClientPage from "./pages/ClientPage";
import ConditionsUtilisation from "./pages/legal/ConditionsUtilisation";
import MentionsLegales from "./pages/legal/MentionsLegales";
import Cookies from "./pages/legal/Cookies";
import AboutPage from "./pages/AboutPage";

import Products from './pages/backoffice/ProductList';

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutSteps />} />
              <Route path="/magasin" element={<Magasin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/logout"  element={<Logout />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
              <Route path="/backoffice" element={<ProtectedRoute />}>
                <Route index element={<BackofficeHome />} />
                <Route path="products" element={<Products />} />
              </Route>
              <Route path="/client" element={<ClientPage />} />
              <Route path="/conditionsutilisation" element={<ConditionsUtilisation />} />
              <Route path="/mentionslegales" element={<MentionsLegales />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}


export default App;
