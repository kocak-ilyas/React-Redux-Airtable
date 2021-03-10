import * as actionTypes from "../../constants/actionTypes";

export const advertisementsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ADVERTISEMENTS:
      return action.payload;
    default:
      return state;
  }
};

export const topNavbarReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_NAVBAR:
      return action.payload;
    default:
      return state;
  }
};

export const carouselReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_CAROUSEL:
      return action.payload;
    default:
      return state;
  }
};

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
