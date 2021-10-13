import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
          <Switch>
            <Route exact path="/" component={Product}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
