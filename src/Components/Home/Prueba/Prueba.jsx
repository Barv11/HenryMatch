import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { getAllUsers, searchUserById } from "../../../redux/actions";

export default function Prueba() {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  const handleOnClick = async () => {
    const token = await getAccessTokenSilently();
    dispatch(getAllUsers(token));
    dispatch(searchUserById(3));
  };

  return (
    <>
      <button onClick={handleOnClick}>API</button>
    </>
  );
}
