import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    console.log(token);
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }

  handleLogout(){
    localStorage.removeItem("token");
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="admin">
        <h1>Welcome, You are logged In</h1>
        <h2>Have a Nice day !</h2>
        <Link to="/"><button onClick={this.handleLogout}>Logout</button></Link>
        <Link to="/">
          <h1>Go to home page</h1>
        </Link>
      </div>
    );
  }
}
