import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_ALL_USERS,
  GET_USER,
  CLEAR_USER,
  SAVE_USER,
  SEARCH_USER,
  GET_ONE_USER,
  UPDATE_USER,
} from "./actionsTypes";
import axios from "axios";
import header from "./header";

let url = "http://localhost:3001";

export const saveUser = (token) => async (dispatch) => {
  try {
    const response = (await axios.post(`${url}/user/save`, {}, header(token)))
      .data;
    dispatch({ type: SAVE_USER, payload: response });
  } catch (error) {
    console.log(error.message);
  }
};

export const searchUser = (token) => async (dispatch) => {
  try {
    const response = (await axios.get(`${url}/user/search`, header(token)))
      .data;
    dispatch({ type: SEARCH_USER, payload: response });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (token, data) => async (dispatch) => {
  try {
    const response = (
      await axios.post(`${url}/user/update`, data, header(token))
    ).data;
    dispatch({type: UPDATE_USER, payload: response})
  } catch (error) {
    console.log(error);
  }
};
