import React, {createContext} from 'react';

const ProductContext = createContext();

class ProductProvider extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			products: [],
			categories: []
		};
		this.getProductsList = this.getProductsList.bind(this);
		this.getCategories = this.getCategories.bind(this);
	}

    getProductsList() {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					products: result,
				});
			});
	}

	getCategories() {
		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					categories: result,
				});
			});
	}

    componentDidMount() {
		this.getProductsList();
		this.getCategories();
	}

    render() {
        return (
            <ProductContext.Provider value={this.state}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductContext, ProductProvider, ProductConsumer}