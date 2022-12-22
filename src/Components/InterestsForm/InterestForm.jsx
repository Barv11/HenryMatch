import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import s from "./InterestForm.module.css";

export default function InterestForm({ setOpenFormInt }) {
  const [current, setCurrent] = useState(0);
  const questionsData = useSelector((state) => state.questions);

  const handleClose = () => {
    setOpenFormInt(false);
  };

  return questionsData.length && (
    <section className={s.container}>
      <h1>
        {current + 1} ➡ {questionsData[current].question}
      </h1>
      {questionsData[current].answers.map((el) => (
        <>
          <div key={el} className={s.mycheckbox}>
            <label htmlFor={el}>{el}</label>
            <input type="checkbox" name="inp" id={el} />
          </div>
        </>
      ))}
      <button onClick={handleClose}>Cerrar Form</button>
      <button
        disabled={current === questionsData.length - 1}
        onClick={() => setCurrent((prev) => prev + 1)}
      >
        next
      </button>
    </section>
  );
}
