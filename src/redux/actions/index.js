import axios from "axios";
import header from "./header";
import {
  GET_ALL_USERS,
  SAVE_USER,
  SEARCH_USER,
  CLEAR_USER,
  SEARCH_USER_BY_ID,
  UPDATE_USER,
  GET_QUESTIONS,
  GET_COUNTRIES,
  GET_COUNTRY_STATES,
  SET_REGISTERED,
  SAVE_INTERESTS,
} from "./actionsTypes";

let url = "http://localhost:3001";
let urlcountries = "https://www.universal-tutorial.com/api";
let tokenAPiCountries =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhc2tAdW5pdmVyc2FsLXR1dG9yaWFsLmNvbSIsImFwaV90b2tlbiI6IlQ2VlBOUmZXbkxFbmdsMHd2djctZ1d2Y09KRHFPSkptc3ZoNkNOdGo5a3p1Z1RSYkhvdXVET1NXeTdzYmJzdG5taDAifSwiZXhwIjoxNjcxOTIzMDAyfQ.rMoOd0wR444CZ_t1VYFJbNFYNeqmCHllqO_jZ6SG7ho";

export const setRegistered = (boolean) => (dispatch) => {
  dispatch({ type: SET_REGISTERED, payload: boolean });
};

export const getAllUsers = (token) => async (dispatch) => {
  try {
    const allUsers = (await axios.get(`${url}/user/get`, header(token))).data;
    console.log(allUsers.data);
    dispatch({ type: GET_ALL_USERS, payload: allUsers });
  } catch (error) {
    console.log(error);
  }
};

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
    const user = (await axios.get(`${url}/user/search`, header(token))).data;
    dispatch({ type: SEARCH_USER, payload: user });
  } catch (error) {
    console.log(error.message);
  }
};

export const searchUserById = (id) => async (dispatch) => {
  try {
    const userHenry = (await axios.get(`${url}/user/search/${id}`)).data;
    dispatch({ type: SEARCH_USER_BY_ID, payload: userHenry });
  } catch (error) {
    console.log(error.message);
  }
};

export const clearUser = () => (dispatch) => {
  dispatch({ type: CLEAR_USER, payload: {} });
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

// export const getCountries = () => async (dispatch) => {
//   try {
//     const response = (
//       await axios.get(`${urlcountries}/getaccesstoken`, {
//         Accept: "application/json",
//         "api-token":
//           "JzZO7UZmlw9NgJg6zpODKaeH1XlJAYZWNjCclLdIwSpDRAbriRV6OSVQ9ULP5OOF2QQ",
//         "user-email": "matematica_bryan@hotmail.com",
//       })
//     ).data;
//     console.log(response);
//     dispatch({ type: GET_COUNTRIES });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

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

export const getQuestions = (token) => async (dispatch) => {
  try {
    const questions = (await axios.get(`${url}/questions/all`, header(token)))
      .data;
    dispatch({ type: GET_QUESTIONS, payload: questions });
  } catch (error) {
    console.log(error.message);
  }
};

export const saveInterests =
  ({ token, data }) =>
  async (dispatch) => {
    try {
      const response = (
        await axios.post(`${url}/user/interests`, data, header(token))
      ).data;
      console.log(response);
      dispatch({ type: SAVE_INTERESTS, payload: response });
    } catch (error) {
      console.log(error.message);
    }
  };
