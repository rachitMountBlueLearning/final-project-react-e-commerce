import React, { Component } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
	display: block;
	margin: 0 auto;
	border-color: black;
`;

export default class LoadingStatus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			color: "#000000",
		};
	}
	render() {
		return (
			<div className="loader">
				<ClipLoader
					color={this.state.color}
					loading={this.state.isLoading}
					css={override}
					size={150}
				/>
			</div>
		);
	}
}
