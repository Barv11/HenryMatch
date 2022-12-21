import React, { useState } from "react";
import s from "./Modal.module.css";


function Modal({ closeModal, question,id, answers, nextHandler, prevHandler }) {
  
  const [arrayAnswers, setArrayAnswers] = useState([]);

  const saveAnswers = (e) => {
    e.preventDefault();
    if(!arrayAnswers.includes(e.target.value)){
      setArrayAnswers((lastAnswers) => [...lastAnswers,e.target.value ])
    } else {
      setArrayAnswers(arrayAnswers.filter(value => value !== e.target.value))
    }
  }
  console.log(arrayAnswers)
  return (
    <div className={s.modalBackground}>
      <div className={s.modalContainer}>
        <div className={s.titleCloseBtn}>
          <button
            className={s.btn}
            onClick={() => {
              closeModal(false);
            }}
          >
            ✖
          </button>
        </div>
        <div className={s.title}>
          <h1>{question}</h1>
        </div>
        <div className={s.body}>
          <ul className={s.options}>
            {answers?.map(e => {
              return (<li><button value={e} onClick={saveAnswers} className={s.btnSelector}>{e}</button></li>)
            })}
          </ul>
        </div>
        <div>{arrayAnswers}</div>
        <div className={s.footer}>
          <button
            onClick={() => {
              closeModal(false);
            }}
            className={s.cancelBtn}

            style={{"background": "red" }}
          > Cancel </button>
          <button onClick={() => nextHandler(arrayAnswers)}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
