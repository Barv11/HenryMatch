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
  SAVE_INTERESTS,
  GET_MATCHS,
  IS_LOADING,
  SHOW_MATCHS,
} from "../actions/actionsTypes";
import { calculateCommonInterests } from "../actions/controllers";

const initialState = {
  users: [],
  userCurrent: {},
  userCurrentMatchs: [],
  userHenry: {},
  message: "",
  countries: [],
  states: [],
  questions: [],
  isLoading: false,
  showMatchs: false,
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
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SHOW_MATCHS:
      return {
        ...state,
        showMatchs: action.payload,
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
    case SAVE_INTERESTS:
      return {
        ...state,
        userCurrent: action.payload.data,
        message: action.payload.status,
        isLoading: false,
        showMatchs: true,
      };
    case GET_MATCHS:
      const copyUsers = state.users.filter(
        (user) => user.email !== action.payload.email
      );
      copyUsers.sort(
        (a, b) =>
          calculateCommonInterests(b, action.payload) -
          calculateCommonInterests(a, action.payload)
      );
      return {
        ...state,
        userCurrentMatchs: copyUsers,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
