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
  GET_QUESTIONS,
  GET_COUNTRIES,
  GET_COUNTRY_STATES,
} from "./actionsTypes";
import axios from "axios";
import header from "./header";

let url = "http://localhost:3001";
let urlcountries = "https://www.universal-tutorial.com/api";
let tokenAPiCountries =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtYXRlbWF0aWNhX2JyeWFuQGhvdG1haWwuY29tIiwiYXBpX3Rva2VuIjoiSnpaTzdVWm1sdzlOZ0pnNnpwT0RLYWVIMVhsSkFZWldOakNjbExkSXdTcERSQWJyaVJWNk9TVlE5VUxQNU9PRjJRUSJ9LCJleHAiOjE2NzA5NDU4NDl9.Uk1KomU1BEEeowq8sJTiTsg4YV1X4_CZvRyagR33ZzQ";

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

// export const saveUser = (token) => async (dispatch) => {
//   try {
//     const response = (await axios.post(`${url}/user/save`, {}, header(token)))
//       .data;
//     dispatch({ type: SAVE_USER, payload: response });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const searchUser = (token) => async (dispatch) => {
  try {
    const response = (await axios.get(`${url}/user/search`, header(token)))
      .data;
    dispatch({ type: SEARCH_USER, payload: response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = (token, data) => async (dispatch) => {
  try {
    const response = (
      await axios.post(`${url}/user/update`, data, header(token))
    ).data;
    dispatch({ type: UPDATE_USER, payload: response });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTokenApiCountries = () => async (dispatch) => {
  try {
    const response = (
      await axios.get(`${urlcountries}/getaccesstoken`, {
        Accept: "application/json",
        "api-token":
          "JzZO7UZmlw9NgJg6zpODKaeH1XlJAYZWNjCclLdIwSpDRAbriRV6OSVQ9ULP5OOF2QQ",
        "user-email": "matematica_bryan@hotmail.com",
      })
    ).data;
    dispatch({ type: GET_COUNTRIES });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCountries = () => async (dispatch) => {
  try {
    const response = (
      await axios.get(`${urlcountries}/countries  `, header(tokenAPiCountries))
    ).data;
    const countries = response.map((el) => {
      return {
        name: el.country_name,
        short_name: el.country_short_name,
      };
    });
    dispatch({ type: GET_COUNTRIES, payload: countries });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCountryStates = (state) => async (dispatch) => {
  try {
    const response = (
      await axios.get(
        `${urlcountries}/states/${state}  `,
        header(tokenAPiCountries)
      )
    ).data;
    const states = response.map((el) => {
      return {
        name: el.state_name,
      };
    });
    dispatch({ type: GET_COUNTRY_STATES, payload: states });
  } catch (error) {
    console.log(error.message);
  }
};

