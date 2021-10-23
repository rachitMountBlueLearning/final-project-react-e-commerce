import React from "react";

function ProductCounter(props) {
	const increaseItem = () => {
		props.increaseItem(props.product.productId);
	};
	const decreaseItem = () => {
		props.decreaseItem(props.product.productId);
	};
	const removeItem = () => {
		props.removeItem(props.product.productId);
	};
	return (
		<div>
			<div className="btn-group">
				<button
					type="button"
					className="btn-red"
					onClick={decreaseItem}
				>
					-
				</button>
				<button type="button" className="quantity">
					{props.product.quantity}
				</button>
				<button
					type="button"
					className="btn-yellow"
					onClick={increaseItem}
				>
					+
				</button>
				<button type="button" className="btn-gray" onClick={removeItem}>
					Remove From Cart
				</button>
			</div>
		</div>
	);
}
export default ProductCounter;
