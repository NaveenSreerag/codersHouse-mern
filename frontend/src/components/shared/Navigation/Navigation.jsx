import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };

  return (
    <nav className="navbar container">
      <Link to={"/"} style={brandStyle}>
        <img src="" alt="logo" />
        <span style={logoText}>Codershouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
