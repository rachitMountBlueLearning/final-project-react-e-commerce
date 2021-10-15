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
				<div>
					<div>
						<img
							src={this.state.productDetails.image}
							alt={this.state.productDetails.title}
						/>
					</div>
					<div>
						<h3>{this.state.productDetails.title}</h3>
						<p> {this.state.productDetails.description} </p>
						<button type="submit"> Add to cart </button>
						<Link to="/">
							{" "}
							<button type="submit"> Back </button>{" "}
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
