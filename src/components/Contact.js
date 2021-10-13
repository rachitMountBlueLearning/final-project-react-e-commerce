import React, { Component } from "react";
import "../App.css";


export default class Contact extends Component {
	render() {
		return (
			<div className="contact-page">
				<h1>Contact Us</h1>
				<div className="contact">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9913.13083989992!2d77.1869190974651!3d28.545098945263813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6be7e6a75%3A0x8b149c3feb567bb1!2sIIT%20Delhi%20Main%20Rd%2C%20IIT%20Campus%2C%20New%20Delhi%2C%20Delhi%20110016%2C%20India!5e0!3m2!1sen!2sus!4v1634121213587!5m2!1sen!2sus" allowfullscreen="" loading="lazy"
						title="Map"
						className="map"
					/>
					<div className="query-and-branches">
						<form className="form">
							<input type="text" placeholder="Full Name ..." name="name" className="input-name" />
							<input type="email" placeholder="Email ..." name="email" className="input-email" />
							<textarea type="text" placeholder="Message ..." name="message" className="message-area" />
							<button type="submit" className="submit-button">
								Submit
							</button>
						</form>
						<div className="branches">
							<h2>Our Branches</h2>
							<div class="address">
								<h3><i class="fas fa-map-marker-alt"></i> 756 Global Place, New York.</h3>
								<h3><i class="fas fa-map-marker-alt"></i> 889 diamond street, USA.</h3>
								<h3><i class="fas fa-map-marker-alt"></i> 756 Unitech buiding, Noida, India.</h3>
								<h3><i class="fas fa-map-marker-alt"></i> 889 Electric substation, Bangalore,India.</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
