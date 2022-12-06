import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_ALL_USERS,
  GET_USER,
  CLEAR_USER,
  SAVE_USER,
  GET_ONE_USER,
  UPDATE_USER,
} from "../actions/actionsTypes";

const initialState = {};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
      };
    case SAVE_USER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
