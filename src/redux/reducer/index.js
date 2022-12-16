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
  GET_QUESTIONS,
  GET_COUNTRIES,
  GET_COUNTRY_STATES,
} from "../actions/actionsTypes";

const initialState = {
  userCurrent: {},
  message: "",
  countries: [],
  states: [],
  questions: []
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
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY_STATES:
      return {
        ...state,
        states: action.payload,
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
