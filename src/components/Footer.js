import React, { Component } from "react";
import "../App.css";
import logo from "../logo.png";
import Logo from "./Logo";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div class="footer1">
          <div class="logo2">
            <img src={logo} alt="store" className="logoF" />{" "}
            <ul class="social_media">
              <li>
                <i class="fab fa-facebook"></i>
              </li>
              <li>
                <i class="fab fa-youtube"></i>
              </li>
              <li>
                <i class="fab fa-twitter-square"></i>
              </li>
              <li>
                <i class="fab fa-pinterest"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </ul>
            <div className="copyright">
              <h7>©Big Sotre. All Rights Reserved</h7>
            </div>
          </div>
          <div class="ul-footer">
            <ul class="ul-2">
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
            <ul class="ul-2" id="ul-2-2">
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div class="end_menu">
            <Logo />
          </div>
        </div>
        <div className="footer2">
          <div>
            <i class="fas fa-home"></i>12k Street, 45 Building Road, Delhi
          </div>
          <div>
            <i class="fas fa-phone-square-alt"></i>+1234 758 839,+1273 748 730
          </div>
          <div>
            <i class="fas fa-envelope"></i> info@bigStore.com
          </div>
        </div>
      </div>
    );
  }
}
