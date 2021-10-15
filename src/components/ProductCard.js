import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
	return (
		<div className="product-card">
			<Link to={`/productDetails/${props.productDetails.id}`}>
				<div className="card-image-wrapper">
					<img
						src={props.productDetails.image}
						className="product-card-image"
						alt="productImage"
					/>
				</div>
				<div className="card-body">
					<h3 className="product-price">
						&#8377; {props.productDetails.price}
					</h3>
					<div className="rating">
						{props.productDetails.rating.rate}{" "}
						<i className="fas fa-star" />
					</div>
				</div>
				<h3 className="product-title">{props.productDetails.title}</h3>
			</Link>
		</div>
	);
}
