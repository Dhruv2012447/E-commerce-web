import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import ProductSection from "./components/ProductSection";
import ProductDetail from "./components/ProductDetail";
import ProductPage  from "./components/ProductPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderSection />
              <ProductSection />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
