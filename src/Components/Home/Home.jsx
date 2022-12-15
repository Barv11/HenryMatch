import React, { useEffect } from "react";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
// import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";
import s from "./Home.module.css";
import Modal from '../Modal/Modal';
import { useState } from "react";


export default function Home() {
  const [openModal, setOpenModal] = useState(false);
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
    <section className={s.container}>
      <h1>Match App!!</h1>
      <h2>Dejanos conocerte</h2>
      <p>Para conocer tus intereses y poder conectar con otros Henry's que compartan tus gustos porfavor completa el formulario ingresado al boton.</p>
      <button 
      onClick={() => {setOpenModal(true)}}> Open </button>
      {openModal && <Modal closeModal={setOpenModal}/>}
      {/* <button onClick={handleOnClick}>API</button> */}
      {/* <UpdateProfile /> */}
    </section>
  );
}
