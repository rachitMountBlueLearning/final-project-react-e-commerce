import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
	constructor(props) {
		super(props);
		const token = localStorage.getItem("token");
		let LoggedIn = true;
		if (token == null) {
			LoggedIn = false;
		}
		this.state = {
			username: "",
			password: "",
			LoggedIn,
		};
		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	submitForm(e) {
		e.preventDefault();
		const { username, password } = this.state;
		//login magic
		if (
			(username === "amit" && password === "1234") ||
			(username === "rachit" && password === "1234") ||
			(username === "pyare" && password === "1234")
		) {
			localStorage.setItem("token", "asnc");
			this.setState({
				LoggedIn: true,
			});
		}
	}

	render() {
		if (this.state.LoggedIn) {
			return <Redirect to="/admin" />;
		}
		return (
			<div>
				<form onSubmit={this.submitForm} className="login">
					<h1>Login</h1>
					<input
						type="text"
						placeholder="username"
						name="username"
						value={this.state.username}
						onChange={this.onChange}
					></input>
					<br />
					<input
						type="password"
						placeholder="password"
						name="password"
						value={this.state.password}
						onChange={this.onChange}
					></input>
					<br />
					<input type="submit"></input>
				</form>
			</div>
		);
	}
}
