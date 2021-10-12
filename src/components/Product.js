import React, { Component } from "react";
import Title from "./Title";
import "../App.css";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result,
        });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <Title name="Our" title="Products" />
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
      </div>
    );
  }
}
