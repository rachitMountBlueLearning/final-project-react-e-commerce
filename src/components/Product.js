import React, { Component } from "react";
import "../App.css";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: []
    };
    this.getItems = this.getItems.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getCategoryProducts = this.getCategoryProducts.bind(this);
  }

  getItems() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result,
        });
      });
  }

  getCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          categories: result,
        });
      });
  }

  getCategoryProducts(category) {
    fetch("https://fakestoreapi.com/products/category/" + category)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result,
        });
      });
  }

  componentDidMount() {
    this.getItems();
    this.getCategories();
  }

  

  render() {
    let { items, categories } = this.state;
    return (
      <section className="products-section">
        <nav className="category-nav">
          <button className="product-category" onClick={() => this.getItems()} key="All">All</button>
          {categories.map((category) => (
            <button className="product-category" onClick={() => this.getCategoryProducts(category)} key={category}>{category}</button>
          ))}
        </nav>
        <div className="products-panel">
          {items.map((item) => (
            <div key={item.id} className="product-card">
              <img
                src={item.image}
                alt="product"
              ></img>
              <h3 className="product-title">{item.title}</h3>
              <h3 className="product-price">&#8377;{item.price}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
