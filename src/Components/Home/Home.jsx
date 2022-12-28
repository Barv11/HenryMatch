import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ButtonText from "./ButtonText/ButtonText";
import ModalData from "../Modal/ModalData";
import InviteLogin from "../InviteLogin/InviteLogin";

import s from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openInvit, setOpenInvit] = useState(false);
  const isLogged = useSelector((state) => state.isLogged);
  const userCurrent = useSelector((state) => state.userCurrent);

  const handleFormInterest = () => {
    if (isLogged) {
      if (userCurrent.interests) {
        navigate("/match/me");
      } else {
        navigate("/match/interest");
      }
    } else {
      setOpenInvit(true);
    }
  };

  useEffect(() => {
    document.title = "Henry Match | Inicio";
  }, []);

  return (
    <>
      <section className={s.cont}>
        <section className={s.cont_left}>
          <h1>Ayudamos a conectar Henrys</h1>
          <h2>
            Déjanos conocerte para poder mostrarte Henrys con tus intereses
          </h2>
          <p>
            Empieza a conectar con Henrys que compartan tus gustos e intereses
            en el mundo IT.
          </p>
          <ButtonText text={"Empezar"} onClick={handleFormInterest} />
        </section>
        <section className={s.cont_right}>
          <img src="/image.webp" alt="image" />
        </section>
        {openModal && <ModalData closeModal={setOpenModal} />}
        {openInvit && <InviteLogin setOpenInvit={setOpenInvit} />}
      </section>
    </>
  );
}
