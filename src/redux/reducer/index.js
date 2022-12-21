import {
  GET_ALL_USERS,
  CLEAR_USER,
  SAVE_USER,
  SEARCH_USER,
  SEARCH_USER_BY_ID,
  UPDATE_USER,
  GET_QUESTIONS,
  GET_COUNTRIES,
  GET_COUNTRY_STATES,
  SET_REGISTERED,
} from "../actions/actionsTypes";

const initialState = {
  users: [],
  userCurrent: {},
  userHenry: {},
  message: "",
  countries: [],
  states: [],
  questions: [],
  isLogged: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload.data,
        message: action.payload.status,
      };
    case SAVE_USER:
      return {
        ...state,
        userCurrent: action.payload.data,
        message: action.payload.status,
      };
    case SEARCH_USER:
      return {
        ...state,
        userCurrent: action.payload.data,
        message: action.payload.status,
      };
    case SEARCH_USER_BY_ID:
      return {
        ...state,
        userHenry: action.payload.data,
        message: action.payload.status,
      };
    case CLEAR_USER:
      return {
        ...state,
        userHenry: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        message: action.payload.status,
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
    case SET_REGISTERED:
      return {
        ...state,
        isLogged: action.payload,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
