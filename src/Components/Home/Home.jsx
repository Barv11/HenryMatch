import React, { useEffect } from "react";
import s from "./Home.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import ButtonText from "./ButtonText/ButtonText";
import Prueba from "./Prueba/Prueba";
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from '../../redux/actions/index';
import ModalData from "../Modal/ModalData";
export default function Home() {

  const [openModal, setOpenModal] = useState(false);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions())
  },[])

  
  // console.log(questionsData)

  return (
    <section className={s.container}>
      <h1>Match App!!</h1>
      <h2>Dejanos conocerte</h2>
      <p>
        Para conocer tus intereses y poder conectar con otros Henry's que
        compartan tus gustos porfavor completa el formulario ingresado al boton.
      </p>
      <ButtonText text={"Open"} onClick={() => setOpenModal(true)} />
      {openModal && <Modal closeModal={setOpenModal} />}
      {/* <Prueba /> */}
    </section>
  );
}
