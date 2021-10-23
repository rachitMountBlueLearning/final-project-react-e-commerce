import {
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE,
} from "./ProductActionTypes.js";

export const fetchProductsRequest = () => {
	return {
		type: FETCH_PRODUCT_REQUEST,
	};
};

export const fetchProductsSuccess = (products) => {
	return {
		type: FETCH_PRODUCT_SUCCESS,
		payload: products,
	};
};

export const fetchProductsFailure = (error) => {
	return {
		type: FETCH_PRODUCT_FAILURE,
		payload: error,
	};
};

export const fetchProducts = () => {
	return (dispatch) => {
		dispatch(fetchProductsRequest);
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((result) => {
				const products = result.data;
				dispatch(fetchProductsSuccess(products));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchProductsFailure(errorMsg));
			});
	};
};
