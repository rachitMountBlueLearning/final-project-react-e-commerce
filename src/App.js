import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Admin from "./components/Admin";
import SignUp from "./components/SignUp";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route path="/details" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/signup" component={SignUp}/>
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
