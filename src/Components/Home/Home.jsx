import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
// import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";
import s from "./Home.module.css";

export default function Home() {
  // const { getAccessTokenSilently } = useAuth0();
  const [open, setOpen] = useState(false);
  const userCurrent = useSelector((state) => state.userCurrent);

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
    <section className={s.container}>
      <h1>Match App!!</h1>
      {/* <button onClick={handleOnClick}>API</button> */}
      <button onClick={() => setOpen(true)}>FORM</button>
      {open ? <UpdateProfile setOpen={setOpen} /> : null}
    </section>
  );
}
