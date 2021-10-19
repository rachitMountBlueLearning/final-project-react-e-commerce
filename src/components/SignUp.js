import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class SignUp extends Component {
	constructor(props) {
		super(props);

		const token = localStorage.getItem("token");
		let LoggedIn = true;
		if (token == null) {
			LoggedIn = false;
		}

		this.state = {
			firstName: "",
			lastName: "",
			username: "",
			mobile: "",
			password: "",
			LoggedIn,
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		if (this.state.LoggedIn) {
			return <Redirect to="/admin" />;
		}
		return (
			<div>
				<form className="signup">
					<h1>SignUp</h1>
					<input
						type="text"
						placeholder="Firstname..."
						name="firstName"
						value={this.state.firstName}
						onChange={this.onChange}
					></input>
					<br />
					<input
						type="text"
						placeholder="Lastname..."
						name="lastName"
						value={this.state.lastName}
						onChange={this.onChange}
					></input>
					<br />
					<input
						type="number"
						placeholder="Mobile No..."
						name="mobile"
						value={this.state.mobile}
						onChange={this.onChange}
					></input>
					<br />
					<input
						type="text"
						placeholder="username..."
						name="username"
						value={this.state.username}
						onChange={this.onChange}
					></input>
					<br />
					<input
						type="password"
						placeholder="password..."
						name="password"
						value={this.state.password}
						onChange={this.onChange}
					></input>
					<br />
					<Link to="/login">
						<input type="submit" className="submit"></input>
					</Link>
					<br />
					<Link to="/login" className="link">
						<h1>Already an user? Click here to login</h1>
					</Link>
				</form>
			</div>
		);
	}
}
