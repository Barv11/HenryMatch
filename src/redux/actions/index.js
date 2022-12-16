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
} from "./actionsTypes";
import axios from "axios";

let url = "http://localhost:3001";

export const saveUser = ({token, user}) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${url}/user/save`,
        user,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
    dispatch({ type: SAVE_USER, payload: user });
    console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
};

export const getQuestions = () => async (dispatch) => {
  const dataQuestions = await axios.get(`${url}/questions`)
  dispatch({type: GET_QUESTIONS, payload: dataQuestions.data})
}
