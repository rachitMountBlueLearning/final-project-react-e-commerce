import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logoGIF from "../images/Ologo.gif"


export default class Logo extends Component {
	render() {
		return (
			<Link to="/" className='logo'>
				<h1 className='large'>
					C<img src={logoGIF} className='logoGIF' alt="O" />RE
				</h1>
				<h1 className='small'>
					STORE
				</h1>
			</Link>
		)
	}
}