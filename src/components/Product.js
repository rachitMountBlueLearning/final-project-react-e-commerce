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

  componentDidMount() {
    this.getItems();
    this.getCategories();
  }

  

  render() {
    let { items, categories } = this.state;
    return (
      <section className="products-section">
        <nav className="category-nav">
          {categories.map((category) => (
            <button className="product-category" onClick={() => (items.filter((product) => product.category === category))} key={category}>{category}</button>
          ))}
        </nav>
        <div className="products">
          {items.map((item) => (
            <div key={item.id} className="container1">
              <img
                src={item.image}
                alt="product"
                width="200"
                height="300"
              ></img>
              <h6>{item.title}</h6>
              <h4>{item.price}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
