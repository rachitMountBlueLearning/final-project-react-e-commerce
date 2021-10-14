import React, {createContext} from 'react';

export const CartContext = createContext();

export class CartProvider extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			CartProductsList: []
		};
		this.getCartProductsList = this.getCartProductsList.bind(this);
	}

    getCartProductsList() {
		fetch('https://fakestoreapi.com/users')
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					usersList: result,
				});
			});
	}

    componentDidMount() {
		this.getCartProductsList();
	}

    render() {
        return (
            <CartContext.Provider value={this.state}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}