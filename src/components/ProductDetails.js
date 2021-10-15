import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class productDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productDetails: {},
		};
	}

	componentDidMount() {
		fetch(`https://fakestoreapi.com/products/${this.props.match.params.id}`)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					productDetails: result,
				});
				console.log(this.state.productDetails);
			});
	}
	render() {
		return (
			<div className="product-details-page">
				<h1>Product Details</h1>
				<div class="product-detail">
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
						<button type="submit"> Add to cart </button>
						<Link to="/">
							{" "}
							<button type="submit" className="back-button">
								{" "}
								Back{" "}
							</button>{" "}
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
