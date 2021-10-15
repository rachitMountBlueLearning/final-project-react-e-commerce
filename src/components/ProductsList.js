import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class AllProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productsList: [],
			categories: [],
			productsDisplay: []
		};

		this.getAllProducts = this.getAllProducts.bind(this);
		this.getCategoryProducts = this.getCategoryProducts.bind(this);
	}

	getCategoryProducts(category) {
		const CATEGORY_PRODUCTS = this.state.productsList
			.filter((product) => product.category === category);
		this.setState({
				productsDisplay: CATEGORY_PRODUCTS
			});
	}

	getAllProducts() {
		this.setState({
				displayProducts: this.state.productsList
			})
	}

	componentDidMount() {

		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((result) => this.setState({
				productsList: result,
				productsDisplay: result
			}))
			.catch((error) => {
				console.log(error);
			});

		fetch("https://fakestoreapi.com/products/categories")
			.then((response) => response.json())
			.then((result) => this.setState({
				categories: result
			}))
			.catch((error) => {
				console.log(error);
			})
	}

	render() {
		return (
			<section className="products-section">
				<nav className="category-nav">
					<button className="product-category" onClick={() => this.getAllProducts()} key="All">All</button>
					{this.state.categories.map((category) => (
						<button className="product-category" onClick={() => this.getCategoryProducts(category)} key={category}>{category}</button>
					))}
				</nav>
				<div className="products-panel col-xl-3 offset--xl-0  
                        col-lg-4 offset--lg-0  
                        col-md-6 offset-md-0 
                        col-sm-8 offset-sm-0
                        col-xs-10 offset-xs-1
                        gy-3
                        d-flex justify-content-center">
					{this.state.productsDisplay.map((product) =>
						<ProductCard key={product.id} productDetails={product} />
					)}
				</div>
			</section>
		)
	}
}