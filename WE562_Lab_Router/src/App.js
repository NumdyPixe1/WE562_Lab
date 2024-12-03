import "./styles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./assets/About";
import Home from "./assets/Home";
import Product from "./assets/Product";
import Dashboard from "./assets/Dashboard";
import Contact from "./assets/Contact";
import ProtectedRoute from "./assets/ProtectedRoute";
import User from "./assets/User";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link style={{ backgroundColor: "#f2ef30" }} to="/">
            Home
          </Link>{" "}
          | <Link to="/about">About</Link> |{" "}
          <Link to="/products/1">Product 1</Link> |{" "}
          <Link style={{ backgroundColor: "#f2ef30" }} to="/contact">
            Contact
          </Link>{" "}
          | <Link to="/user/1">User 1</Link> | <Link to="/user/2">User 2</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
