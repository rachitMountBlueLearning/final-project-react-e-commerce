import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.render(
	<ProductProvider>
		<CartProvider>
			<UserProvider>
				<Router>
					<App />
				</Router>
			</UserProvider>
		</CartProvider>
	</ProductProvider>,
	document.getElementById("root"),
);
