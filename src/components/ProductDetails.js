import React, { Component } from "react";
import ProductCounter from "./ProductCounter";
import LoadingStatus from "./LoadingStatus";
import { Link } from "react-router-dom";
import "../App.css";

export default class ProductDetails extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props.productsInCart);
		this.state = {
			isLoading: true,
			productDetails: {},
		};
	}

	componentDidMount() {
		fetch(`https://fakestoreapi.com/products/${this.props.match.params.id}`)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					productDetails: result,
					isLoading: false,
				});
			})
			.catch((error) => {
				this.setState({
					isLoading: false,
				});
				console.log(error);
			});
	}

	inCartDetails = Array.isArray(this.props.productsInCart)
		? this.props.productsInCart.find(
				(product) =>
					product.productId === parseInt(this.props.match.params.id),
		  )
		: false;

	checkInCart = () => {
		return this.props.productsInCart.find(
			(product) =>
				product.productId === parseInt(this.props.match.params.id),
		);
	};

	addToCart = () => {
		let inCartDetails = {
			productImage: this.state.productDetails.image,
			productTitle: this.state.productDetails.title,
			productPrice: this.state.productDetails.price,
			productId: parseInt(this.props.match.params.id),
			quantity: 1,
		};
		this.props.addToCart(inCartDetails);
	};

	render() {
		return this.state.isLoading ? (
			<LoadingStatus />
		) : (
			<div className="product-details-page">
				<h1>Product Details</h1>
				<div className="product-detail">
					<div>
						<img
							src={this.state.productDetails.image}
							alt={this.state.productDetails.title}
							className="product-detail-image"
						/>
					</div>
					<div className="product-detail-description">
						<h3>{this.state.productDetails.title}</h3>
						<h4> {this.state.productDetails.description} </h4>
						{this.checkInCart() ? (
							<ProductCounter
								product={this.checkInCart()}
								increaseItem={this.props.increaseItem}
								decreaseItem={this.props.decreaseItem}
								removeItem={this.props.removeItem}
							/>
						) : (
							<button
								type="button"
								className="back-button"
								onClick={this.addToCart}
							>
								{" "}
								Add To Cart{" "}
							</button>
						)}
						<Link to="/">
							{" "}
							<button type="button" className="back-button">
								{" "}
								Back To Home{" "}
							</button>{" "}
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
