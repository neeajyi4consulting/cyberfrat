import { ActionTypes } from "../constants/actionTypes";
const initialState = {
  currentUser: null,
  userDetails: {},
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN:
      return { ...state, currentUser: payload };
    case ActionTypes.FETCH_CURRENTUSER:
      return { ...state, currentUser: payload };
    case ActionTypes.LOGOUT:
      return { ...state, currentUser: payload };
    case ActionTypes.EDIT_DETAILS:
      return { ...state, currentUser: payload };
    case ActionTypes.GET_USER_DETAILS:
      return { ...state, userDetails: payload };

    default:
      return state;
  }
};
