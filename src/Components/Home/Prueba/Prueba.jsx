import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function Prueba() {
  const { getAccessTokenSilently } = useAuth0();
  const handleOnClick = async () => {
    try {
      const token = await getAccessTokenSilently();
      const user = (
        await axios.get("http://localhost:3001/user/get", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
      ).data;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <button onClick={handleOnClick}>API</button>
    </>
  );
}
