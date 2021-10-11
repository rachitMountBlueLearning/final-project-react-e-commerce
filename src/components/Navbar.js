import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../App.css";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="store" className="logo"/>
        </Link>
        <div class="title"><div class="name">Big Store Ecommerce</div>
        <ul class="ul">
        <li><i class="fas fa-house-user"></i>Home</li>
        <li><i class="fas fa-sign-in-alt"></i>Login</li>
        <li><i class="far fa-user"></i>Account</li>
        <li><i class="fas fa-mobile-alt"></i>Contact</li>
        </ul>
        </div>
        <Link to="/cart">
          <button>
            <i className="fas fa-cart-plus"></i>
            my cart
          </button>
        </Link>
      </nav>
    );
  }
}
