import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_ALL_USERS,
  GET_USER,
  CLEAR_USER,
  SAVE_USER,
  GET_ONE_USER,
  SEARCH_USER,
  UPDATE_USER,
} from "../actions/actionsTypes";

const initialState = {
  userCurrent: {},
  message: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        userCurrent: action.payload,
      };
    case SEARCH_USER:
      return {
        ...state,
        userCurrent: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
