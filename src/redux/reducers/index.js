import { combineReducers } from "redux";
import {
  advertisementsReducer,
  topNavbarReducer,
  carouselReducer,
  productsReducer,
} from "./getReducer";
import { cartReducer } from "./cartReducer";
import { userDataReducer } from "./userReducer";

const rootReducers = combineReducers({
  advertisementsReducer,
  topNavbarReducer,
  carouselReducer,
  productsReducer,
  cartReducer,
  userDataReducer,
});
export default rootReducers;