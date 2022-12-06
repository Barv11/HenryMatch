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

let url = "http://localhost:3001";

// export const reviewsOfAProduct = (id) => async (dispatch) => {
//   try {
//     const reviews = (await axios.get(`${url}/reviews?productoId=${id}`)).data;
//     dispatch({ type: USER_LOGIN, payload: reviews });
//   } catch (error) {
//     console.error(error);
//   }
// };

export const saveUser = (token) => async (dispatch) => {
  try {
    const user = (
      await axios.get("http://localhost:3001/user/save", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
    ).data;
    dispatch({ type: SAVE_USER, payload: user });
  } catch (error) {
    console.log(error.message);
  }
};