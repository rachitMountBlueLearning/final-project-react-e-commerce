import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";

export default class Cart extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.cartDetails);
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
										{Number.parseFloat(
											Items.productPrice * Items.quantity,
										).toFixed(2)}
									</h5>
								</div>
								<div className="prduct">
									<ProductCounter
										key={Items.productId}
										product={Items}
										increaseItem={this.props.increaseItem}
										decreaseItem={this.props.decreaseItem}
									/>
								</div>
							</div>
						</div>
					))}
					<h3 className="total-amount">
						{" "}
						Total Amount: &#8377;{" "}
						{Number.parseFloat(this.props.totalAmount).toFixed(
							2,
						)}{" "}
					</h3>
				</div>
			);
		}
	}
}
