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
			totalAmount: 0,
		};
	}
	addItemToCart = (newItem) => {
		let products = this.state.cartDetails;
		products.push(newItem);
		let totalPrice = this.state.totalAmount;
		totalPrice += newItem.productPrice * newItem.quantity;
		// totalPrice = Number.parseFloat(totalPrice).toFixed(2);
		this.setState({
			cartDetails: products,
			totalAmount: totalPrice,
		});
	};

	increaseItem = (id) => {
		let products = this.state.cartDetails;
		let totalPrice = this.state.totalAmount;
		if (products.some((cartItem) => parseInt(cartItem.productId) === id)) {
			products = products.map((cartItem) => {
				if (cartItem.productId === Number(id)) {
					cartItem.quantity += 1;
					totalPrice += cartItem.productPrice;
				}
				return cartItem;
			});
			// console.log(Number.parseFloat(439.34567115).toFixed(2));
		}
		// totalPrice = Number.parseFloat(totalPrice).toFixed(2);
		this.setState({
			cartDetails: products,
			totalAmount: totalPrice,
		});
	};

	decreaseItem = (id) => {
		let products = this.state.cartDetails;
		let totalPrice = this.state.totalAmount;
		let currentProduct = products.find(
			(product) => product.productId === Number(id),
		);
		if (currentProduct.quantity > 1) {
			products = products.map((cartItem) => {
				if (cartItem.productId === Number(id)) {
					cartItem.quantity -= 1;
					totalPrice -= cartItem.productPrice;
				}
				return cartItem;
			});
		} else {
			products = products.filter((product) => {
				if (product.productId !== Number(id)) {
					return true;
				} else {
					totalPrice -= product.productPrice;
					return false;
				}
			});
		}
		// totalPrice = Number.parseFloat(totalPrice).toFixed(2);
		this.setState({
			cartDetails: products,
			totalAmount: totalPrice,
		});
	};

	removeItem = (id) => {
		let products = this.state.cartDetails;
		let totalPrice = this.state.totalAmount;
		products = products.filter((product) => {
			if (product.productId !== Number(id)) {
				return true;
			} else {
				totalPrice -= product.productPrice * product.quantity;
				return false;
			}
		});
		this.setState({
			cartDetails: products,
			totalAmount: totalPrice,
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
								totalAmount={this.state.totalAmount}
								productsInCart={this.state.cartDetails}
								addToCart={this.addItemToCart}
								increaseItem={this.increaseItem}
								decreaseItem={this.decreaseItem}
								removeItem={this.removeItem}
							/>
						)}
					/>
					<Route
						path="/cart"
						render={(props) => (
							<Cart
								totalAmount={this.state.totalAmount}
								cartDetails={this.state.cartDetails}
								increaseItem={this.increaseItem}
								decreaseItem={this.decreaseItem}
								removeItem={this.removeItem}
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
