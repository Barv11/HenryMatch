import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_ALL_USERS,
  GET_USER,
  CLEAR_USER,
  SAVE_USER,
  GET_ONE_USER,
  UPDATE_USER,
} from "./actionsTypes";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
const { isAuthenticated, getAccessTokenSilently, loginWithPopup } = useAuth0();

let url = "http://localhost:3001";


export const reviewsOfAProduct = (id) => async (dispatch) => {
  try {
    const reviews = (await axios.get(`${url}/reviews?productoId=${id}`)).data;
    dispatch({ type: USER_LOGIN, payload: reviews });
  } catch (error) {
    console.error(error);
  }
};

export const userLogIn = () => (dispatch) => {
  try {
    loginWithPopup();
    dispatch({ type: USER_LOGIN });
  } catch (error) {
    console.error(error);
  }
};

export const saveUser = () => async (dispatch) => {
  try {
    const token = await getAccessTokenSilently();
    const user = (
      await axios.get("http://localhost:3001/user/save", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
    ).data;
    dispatch({type: SAVE_USER, payload: user});
  } catch (error) {
    console.log(error.message);
  }
};
