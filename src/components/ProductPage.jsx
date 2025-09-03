import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Added useNavigate
import "./ProductPage.css";

// Product data
const mensProducts = [
  { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack", price: 109.95, category: "men's clothing", rating: 3.9, image: "/img/download (6).jpeg", description: "Perfect backpack for daily use, fits 15 inch laptops." },
  { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.3, category: "men's clothing", rating: 4.1, image: "/img/images.jpeg", description: "Premium slim fit T-shirt made from 100% cotton." },
  { id: 3, title: "Mens Cotton Jacket", price: 55.99, category: "men's clothing", rating: 4.7, image: "/img/jacket.jpeg", description: "Classic cotton jacket for all weather." },
  { id: 4, title: "Mens Casual Slim Fit", price: 15.99, category: "men's clothing", rating: 2.1, image: "/img/slimfit.jpeg", description: "Casual slim fit shirt with modern design." },
];

const jewelleryProducts = [
  { id: 5, title: "Diamond Necklace", price: 499.99, category: "jewellery", rating: 4.8, image: "/img/diamonnec.jpeg", description: "Elegant diamond necklace perfect for weddings." },
  { id: 6, title: "Gold Earrings", price: 199.99, category: "jewellery", rating: 4.5, image: "/img/earrings.jpeg", description: "24K gold earrings with intricate design." },
  { id: 7, title: "Bangle Set", price: 199.99, category: "jewellery", rating: 4.5, image: "/img/bangleset.jpeg", description: "Elegant bangle set with intricate design." },
  { id: 8, title: "Diamond Bracelets", price: 199.99, category: "jewellery", rating: 4.5, image: "/img/bracelets.jpeg", description: "Bracelets with intricate design." },
];

const girlsWearProducts = [
  { id: 9, title: "Floral Lehenga", price: 129.99, category: "girls wear", rating: 4.6, image: "/img/lehenga.jpeg", description: "Beautiful floral lehenga with embroidery." },
  { id: 10, title: "Party Wear Dress", price: 89.99, category: "girls wear", rating: 4.4, image: "/img/partywear.jpeg", description: "Stylish Party Wear dress for festive occasions." },
  { id: 11, title: "Anarkali Dress", price: 89.99, category: "girls wear", rating: 4.4, image: "/img/anarkali.jpeg", description: "Stylish Anarkali dress for festive occasions." },
  { id: 12, title: "Heavy Wedding Dress", price: 89.99, category: "girls wear", rating: 4.4, image: "/img/heavyweddingdress.jpeg", description: "Stylish heavy wedding dress for festive occasions." },
];

const trendingProducts = [
  { id: 13, title: "Smartwatch Series X", price: 249.99, category: "electronics", rating: 4.7, image: "/img/smartwatch.jpeg", description: "Latest smartwatch with health tracking features." },
  { id: 14, title: "Noise Cancelling Headphones", price: 179.99, category: "electronics", rating: 4.6, image: "/img/headphones.jpeg", description: "Premium sound quality with active noise cancellation." },
  { id: 15, title: "Mobile Phone", price: 699.99, category: "electronics", rating: 4.6, image: "/img/mobilephone.jpeg", description: "Premium mobile phone with advanced features." },
  { id: 16, title: "Laptop", price: 179.99, category: "electronics", rating: 4.6, image: "/img/laptop.jpeg", description: "Premium laptop with high performance." },
];

const allProducts = [
  ...mensProducts,
  ...jewelleryProducts,
  ...girlsWearProducts,
  ...trendingProducts,
];

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // <-- added hook
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category");

  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("");
  const [view, setView] = useState("grid");

  useEffect(() => {
    if (categoryFromUrl) setCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const filteredProducts =
    category === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    if (sortOption === "ratingHighLow") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="product-page">
      <h1>Product Page</h1>

      <div className="controls">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewellery">Jewellery</option>
          <option value="girls wear">Girls Wear</option>
          <option value="electronics">Electronics</option>
        </select>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="ratingHighLow">Rating: High to Low</option>
        </select>

        <button onClick={() => setView("grid")}>Grid View</button>
        <button onClick={() => setView("list")}>List View</button>
      </div>

      <div className={`product-grid ${view === "list" ? "list" : ""}`}>
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className={`product-card ${view === "list" ? "list" : ""}`}
            onClick={() => navigate(`/product/${product.id}`)} // <-- navigation added
            style={{ cursor: "pointer" }} // optional: pointer
          >
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="rating">⭐ {product.rating}</p>
              {view === "list" && <p>{product.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
