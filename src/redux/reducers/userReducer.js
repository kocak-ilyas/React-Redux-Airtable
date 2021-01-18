import * as actionTypes from "../actions/actionTypes";

export const userDataReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return action.payload;
    case actionTypes.SIGN_IN_FAIL:
      return action.payload;
    case actionTypes.SIGN_IN_ERROR:
      return action.payload;
    default:
      return state;
  }
};
