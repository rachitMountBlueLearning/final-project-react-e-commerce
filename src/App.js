import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import AllProducts from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Admin from "./components/Admin";
import SignUp from "./components/SignUp";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cartDetails: [],
		};
	}
	addItemToCart = (newItem) => {
		let products = this.state.cartDetails;
		products.push(newItem);

		this.setState({
			cartDetails: products,
		});
		console.log(this.state.cartDetails);
	};

	increaseItem = (id) => {
		let products = this.state.cartDetails;
		if (products.some((cartItem) => parseInt(cartItem.productId) === id)) {
			products = products.map((cartItem) => {
				if (cartItem.productId === Number(id)) {
					cartItem.quantity += 1;
				}
				return cartItem;
			});
		}
		this.setState({
			cartDetails: products,
		});
	};

	decreaseItem = (id) => {
		let products = this.state.cartDetails;

		let currentProduct = products.find(
			(product) => product.productId === Number(id),
		);
		if (currentProduct.quantity > 1) {
			products = products.map((cartItem) => {
				if (cartItem.productId === Number(id)) {
					cartItem.quantity -= 1;
				}
				return cartItem;
			});
		} else {
			products = products.filter(
				(product) => product.productId !== Number(id),
			);
		}
		this.setState({
			cartDetails: products,
		});
	};

	render() {
		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route exact path="/" component={AllProducts} />
					<Route
						path="/productDetails/:id"
						render={(props) => (
							<ProductDetails
								{...props}
								productsInCart={this.state.cartDetails}
								addToCart={this.addItemToCart}
								increaseItem={this.increaseItem}
								decreaseItem={this.decreaseItem}
							/>
						)}
					/>
					<Route
						path="/cart"
						render={(props) => (
							<Cart
								cartDetails={this.state.cartDetails}
								// cartCount={this.state.cartCount}
								increaseItem={this.increaseItem}
								decreaseItem={this.decreaseItem}
							/>
						)}
					/>
					<Route path="/contact" component={Contact} />
					<Route path="/signup" component={SignUp} />
					<Route path="/login" component={Login} />
					<Route path="/admin" component={Admin} />
					<Route component={Default} />
				</Switch>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
