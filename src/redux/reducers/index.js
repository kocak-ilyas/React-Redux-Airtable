import { combineReducers } from "redux";
import {
  advertisementsReducer,
  topNavbarReducer,
  carouselReducer,
  productsReducer,
} from "./getReducer";
import { cartReducer } from "./cartReducer";

const rootReducers = combineReducers({
  advertisementsReducer,
  topNavbarReducer,
  carouselReducer,
  productsReducer,
  cartReducer,
});
export default rootReducers;