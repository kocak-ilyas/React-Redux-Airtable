import * as actionTypes from "./actionTypes";
import alertify from "alertifyjs";

export const addToCart = (product, cart) => (dispatch) => {
  const tempCart = cart.cart;
  let productMatch = false;
  tempCart.forEach((item) => {
    if (item.id === product.id) {
      item.fields.countOfCart += 1;
      productMatch = true;
      // alertify.set("notifier", "position", "bottom-right");
      alertify.success(
        product.fields.name + " count: " + item.fields.countOfCart,
        2
      );
    }
  });

  if (!productMatch) {
    product.fields.countOfCart = 1;
    tempCart.push(product);
    // alertify.set("notifier", "position", "bottom-right");
    alertify.success(product.fields.name + " added to cart :)", 3);

    dispatch({ type: actionTypes.UPDATE_TO_CART, payload: tempCart });
  }
};

export const incToCount = (product, cart) => (dispatch) => {
  const tempCart = cart.cart;
  tempCart.forEach((item) => {
    if (item.id === product.id) {
      item.fields.countOfCart += 1;
      // alertify.set("notifier", "position", "bottom-right");
      alertify.success(
        product.fields.name + " count: " + item.fields.countOfCart,
        2
      );
    }
  });
  dispatch({ type: actionTypes.UPDATE_TO_CART, payload: tempCart });
};

export const decToCount = (product, cart) => (dispatch) => {
  const tempCart = cart.cart;
  if (product.fields.countOfCart !== 0) {
    tempCart.forEach((item) => {
      if (item.id === product.id) {
        item.fields.countOfCart -= 1;
        // alertify.set("notifier", "position", "bottom-right");
        alertify.error(
          product.fields.name + " count: " + item.fields.countOfCart,
          2
        );
      }
    });
  }
  dispatch({ type: actionTypes.UPDATE_TO_CART, payload: tempCart });
};

export const removeToCart = (product, cart) => (dispatch) => {
  const tempCart = cart.cart.filter((item) => item.id !== product.id);
  // alertify.set("notifier", "position", "top-center");
  alertify.error(product.fields.name + " removed from cart!", 2);
  dispatch({ type: actionTypes.UPDATE_TO_CART, payload: tempCart });
};

// import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";
// export const addToCart = (items, product) => (dispatch) => {
//   const cartItems = items.slice();
//   let productAlreadyInCart = false;
//   cartItems.forEach((cp) => {
//     if (cp.id === product.id) {
//       cp.count += 1;
//       productAlreadyInCart = true;
//     }
//   });
//   if (!productAlreadyInCart) {
//     cartItems.push({ ...product, count: 1 });
//   }
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   dispatch({ type: ADD_TO_CART, payload: { cartItems } });
// };
// export const removeFromCart = (items, product) => (dispatch) => {
//   const cartItems = items.slice().filter((a) => a.id !== product.id);
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
// };
