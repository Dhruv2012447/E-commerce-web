import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

// Import all product categories
const mensProducts = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    category: "men's clothing",
    rating: 3.9,
    image: "/public/img/download (6).jpeg",
    description: "Perfect backpack for daily use, fits 15 inch laptops.",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    category: "men's clothing",
    rating: 4.1,
    image: "/public/img/images.jpeg",
    description: "Premium slim fit T-shirt made from 100% cotton.",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    rating: 4.7,
    image: "/public/img/jacket.jpeg",
    description: "Classic cotton jacket for all weather.",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    category: "men's clothing",
    rating: 2.1,
    image: "/public/img/slimfit.jpeg",
    description: "Casual slim fit shirt with modern design.",
  },
];

const jewelleryProducts = [
  {
    id: 5,
    title: "Diamond Necklace",
    price: 499.99,
    category: "jewellery",
    rating: 4.8,
    image: "/public/img/diamonnec.jpeg",
    description: "Elegant diamond necklace perfect for weddings.",
  },
  {
    id: 6,
    title: "Gold Earrings",
    price: 199.99,
    category: "jewellery",
    rating: 4.5,
    image: "/public/img/earrings.jpeg",
    description: "24K gold earrings with intricate design.",
  },
  {
    id: 7,
    title: "Bangle Set",
    price: 199.99,
    category: "jewellery",
    rating: 4.5,
    image: "/public/img/bangleset.jpeg",
    description: "Elegant bangle set with intricate design.",
  },
  {
    id: 8,
    title: "Diamond Bracelets",
    price: 199.99,
    category: "jewellery",
    rating: 4.5,
    image: "/public/img/bracelets.jpeg",
    description: "Bracelets with intricate design.",
  },
];

const girlsWearProducts = [
  {
    id: 9,
    title: "Floral Lehenga",
    price: 129.99,
    category: "girls wear",
    rating: 4.6,
    image: "/public/img/lehenga.jpeg",
    description: "Beautiful floral lehenga with embroidery.",
  },
  {
    id: 10,
    title: "Party Wear Dress",
    price: 89.99,
    category: "girls wear",
    rating: 4.4,
    image: "/public/img/partywear.jpeg",
    description: "Stylish Party Wear dress for festive occasions.",
  },
  {
    id: 11,
    title: "Anarkali Dress",
    price: 89.99,
    category: "girls wear",
    rating: 4.4,
    image: "/public/img/anarkali.jpeg",
    description: "Stylish Anarkali dress for festive occasions.",
  },
  {
    id: 12,
    title: "Heavy Wedding Dress",
    price: 89.99,
    category: "girls wear",
    rating: 4.4,
    image: "/public/img/heavyweddingdress.jpeg",
    description: "Stylish heavy wedding dress for festive occasions.",
  },
];

const trendingProducts = [
  {
    id: 13,
    title: "Smartwatch Series X",
    price: 249.99,
    category: "electronics",
    rating: 4.7,
    image: "/public/img/smartwatch.jpeg",
    description: "Latest smartwatch with health tracking features.",
  },
  {
    id: 14,
    title: "Noise Cancelling Headphones",
    price: 179.99,
    category: "electronics",
    rating: 4.6,
    image: "/public/img/headphones.jpeg",
    description: "Premium sound quality with active noise cancellation.",
  },
  {
    id: 15,
    title: "Mobile Phone",
    price: 699.99,
    category: "electronics",
    rating: 4.6,
    image: "/public/img/mobilephone.jpeg",
    description: "Premium mobile phone with advanced features.",
  },
  {
    id: 16,
    title: "Laptop",
    price: 179.99,
    category: "electronics",
    rating: 4.6,
    image: "/public/img/laptop.jpeg",
    description: "Premium laptop with high performance.",
  },
];

// Merge all products
const allProducts = [
  ...mensProducts,
  ...jewelleryProducts,
  ...girlsWearProducts,
  ...trendingProducts,
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="description">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="rating">⭐ {product.rating}</p>

        <button className="btn">Add to bag</button>
        <button
          className="back-link"
          onClick={() => navigate(-1)} // Go back to previous page
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
