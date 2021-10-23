import { combineReducers } from "react-redux";
import ProductReducer from "./products/ProductReducer";

const rootReducer = combineReducers({
	product: ProductReducer,
});

export default rootReducer;
