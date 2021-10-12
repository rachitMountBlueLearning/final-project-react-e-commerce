import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../App.css";
export default class Header extends Component {
  render() {
    return (
      <section className="header-section">
        <Logo />
        <nav className="navbar">
          <Link to="/" className="header-nav-link"><i className="fas fa-house-user"></i>Home</Link>
          <Link to="/" className="header-nav-link"><i className="far fa-user"></i>Account</Link>
          <Link to="/" className="header-nav-link"><i className="fas fa-mobile-alt"></i>Contact</Link>
        </nav>
        <div className="header-buttons-section">
          <Link to="/cart" className="button-cart"><i className="fas fa-cart-plus"></i> My Cart</Link>
          <button className="button-login-register"><i className="fas fa-sign-in-alt"></i> Login/Register</button>
        </div>
      </section>
    );
  }
}
