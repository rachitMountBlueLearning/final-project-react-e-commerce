import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../App.css";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" class="logo" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-items ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus"></i>
            my cart
          </button>
        </Link>
      </nav>
    );
  }
}
