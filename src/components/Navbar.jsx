import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Correct imports
import CartSidebar from "./CartSidebar";
import "./Navbar.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
             <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="dropdown">
            <a href="#" onClick={(e) => e.preventDefault()} className="drop-link">
              Product
            </a>

            <ul className="dropdown-menu" aria-label="Product submenu">
              <li>
                <a href="#" onClick={(e) => handleCategoryClick(e, "electronics")}>
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleCategoryClick(e, "jewellery")}>
                  Jewelry
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleCategoryClick(e, "men's clothing")}>
                  Men's Clothing
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleCategoryClick(e, "girls wear")}>
                  Women's Clothing
                </a>
              </li>
              <li className="view-all">
                <Link to="/ProductPage">View All Products</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Features
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Marketplace
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Company
            </a>
          </li>
        </ul>

        <ul className="nav-right">
          <li>
            <button
              onClick={() => setIsOpen(true)}
              className="cart-btn"
              aria-label="Open shopping cart"
            >
              🛒 View Cart
            </button>
          </li>
        </ul>
      </nav>

      <CartSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
