import * as actionTypes from "../../constants/actionTypes";

export const checkMailReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.CHECK_MAIL_AVAİLABLE_TRUE:
      return action.payload;
    case actionTypes.CHECK_MAIL_AVAİLABLE_FALSE:
      return action.payload;
    default:
      return state;
  }
};

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
