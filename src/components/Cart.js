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
				<div>
					<div className="cross">
						<Link to="/">
							{" "}
							<button type="button"> Home </button>{" "}
						</Link>
					</div>
					{this.props.cartDetails.map((Items) => (
						<div className="cart-flex">
							<div
								key={Items.productId}
								className="product-image"
							>
								<img
									src={Items.productImage}
									alt={Items.productTitle}
									className="cart-image"
								/>
							</div>
							<div className="cart-discription">
								<div>
									<h5>{Items.productTitle}</h5>
								</div>
								<div>
									<h5>
										Price: &#8377;
										{Items.productPrice * Items.quantity}
									</h5>
								</div>
								<div>
									<h5>Quantity: {Items.quantity}</h5>
								</div>
							</div>
						</div>
					))}
				</div>
			);
		}
	}
}
