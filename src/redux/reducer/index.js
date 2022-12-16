import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_ALL_USERS,
  GET_USER,
  CLEAR_USER,
  SAVE_USER,
  GET_ONE_USER,
  UPDATE_USER,
  GET_QUESTIONS
} from "../actions/actionsTypes";

const initialState = {
  questions: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
      };
    case GET_QUESTIONS: 
    return {
      ...state,
      questions: action.payload
    }
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
