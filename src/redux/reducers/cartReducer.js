import * as actionTypes from "../../constants/actionTypes";
import * as initialState from "./initialState";

export const cartReducer = (state = initialState.currentCart, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TO_CART:
      return { cart: action.payload };
    default:
      return state;
  }
}; 

// import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";
// export default function (state = {}, action) {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return { ...state, items: action.payload.cartItems };
//     case REMOVE_FROM_CART:
//       return { ...state, items: action.payload.cartItems };
//     default:
//       return state;
//   }
// }
