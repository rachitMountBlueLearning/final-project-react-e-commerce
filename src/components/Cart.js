import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ProductCounter from "./ProductCounter";

export default class Cart extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			isLoading: true,
		};
	}
	render() {
		if (this.props.cartDetails.length === 0) {
			return (
				<Link to="/" className="cart">
					<p>Your cart is empty! To add items please click here</p>
				</Link>
			);
		} else {
			return (
				<div className="cart">
					<Link to="/" className="cross">
						{" "}
						X{" "}
					</Link>
					{this.props.cartDetails.map((Items) => (
						<div className="cart-flex">
							<div
								key={Items.productId}
								className="product-image"
							>
								<img
									src={Items.productImage}
									alt={Items.productTitle}
								/>
							</div>
							<div className="product-title">
								<h3>{Items.productTitle}</h3>
								<br />
								<h4>
									Price: {Items.productPrice * Items.quantity}
								</h4>
								<br />
								<h4>Quantity: {Items.quantity}</h4>
							</div>
						</div>
					))}
				</div>
			);
		}
	}
}
