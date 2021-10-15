import React, { Component } from "react";
import "../App.css";

export default class Contact extends Component {
	render() {
		return (
			<div className="contact-page">
				<h1>Contact Us</h1>
				<div className="contact">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.410021803737!2d77.6112211!3d12.9332501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2b320fefa7ffb8c!2sMountBlue%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1634303636587!5m2!1sen!2sin"
						allowFullScreen=""
						loading="lazy"
						title="Map"
						className="map"
					/>
					<div className="query-and-branches">
						<form className="form">
							<input
								type="text"
								placeholder="Full Name ..."
								name="name"
								className="input-name"
							/>
							<input
								type="email"
								placeholder="Email ..."
								name="email"
								className="input-email"
							/>
							<textarea
								type="text"
								placeholder="Message ..."
								name="message"
								className="message-area"
							/>
							<button type="submit" className="submit-button">
								Submit
							</button>
						</form>
						<div className="branches">
							<h2>Our Branches</h2>
							<div class="address">
								<h3>
									<i class="fas fa-map-marker-alt"></i> 756
									Global Place, New York.
								</h3>
								<h3>
									<i class="fas fa-map-marker-alt"></i> 889
									diamond street, USA.
								</h3>
								<h3>
									<i class="fas fa-map-marker-alt"></i> 756
									Unitech buiding, Noida, India.
								</h3>
								<h3>
									<i class="fas fa-map-marker-alt"></i> 889
									Electric substation, Bangalore,India.
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
