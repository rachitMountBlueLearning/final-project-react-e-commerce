import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";


export default class Footer extends Component {
	render() {
		return (
			<div className="footer-section">
				<div class="footer-links-logos">
					<Logo />
					<div class="social-media-logos">
						<Link to="/"><i class="fab fa-facebook"></i></ Link>
						<Link to="/"><i class="fab fa-youtube"></i></ Link>
						<Link to="/"><i class="fab fa-twitter-square"></i></ Link>
						<Link to="/"><i class="fab fa-pinterest"></i></ Link>
						<Link to="/"><i class="fab fa-instagram"></i></ Link>
					</div>
				</div>
				<div className="footer-contact">
					<h2 className="contact-title">Contact Us</h2>
					<h3><i class="fas fa-map-marker-alt"></i> 12k Street, 45 Building Road, Delhi - 112233</h3>
					<h3><i class="fas fa-phone"></i> +1234-758-839, +1273-748-730</h3>
					<h3><i class="fas fa-envelope"></i> info@coreStore.com</h3>
				</div>
				<div className="copyright">
					<h2 className="copyright-title">&copy; CORE STORE. All Rights Reserved</h2>
				</div>
			</div>
		);
	}
}
