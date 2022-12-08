import React from "react";
// import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  // const { getAccessTokenSilently } = useAuth0();

  // const handleOnClick = async () => {
  //   try {
  //     const token = await getAccessTokenSilently();
  //     const user = (
  //       await axios.get("http://localhost:3001/user/get", {
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //         },
  //       })
  //     ).data;
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div>
      <h1>Match App!!</h1>
      {/* <button onClick={handleOnClick}>API</button> */}
    </div>
  );
}
