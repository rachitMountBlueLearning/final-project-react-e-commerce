import {
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE,
} from "./ProductActionTypes.js";

const initialState = {
	productsList: [],
	isLoading: false,
	error: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCT_REQUEST:
			return {
				...state,
				isLoading: true,
			};

		case FETCH_PRODUCT_SUCCESS:
			return {
				...state,
				isLoading: false,
				productsList: action.payload,
			};

		case FETCH_PRODUCT_REQUEST:
			return {
				...state,
				isLoading: false,
				productsList: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
