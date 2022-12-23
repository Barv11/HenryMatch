import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { UilAngleUp, UilAngleDown } from "@iconscout/react-unicons";

import s from "./InterestForm.module.css";
import { useEffect } from "react";

export default function InterestForm() {
  const [clickedUp, setClickedUp] = useState(false);
  const [clickeDown, setClickeDown] = useState(false);
  const [error, setError] = useState({
    state: false,
    site: [],
  });

  const [current, setCurrent] = useState(0);

  const [allAnswers, setAllAnswers] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  });

  const questionsData = useSelector((state) => state.questions);

  const handlePrev = () => {
    setClickeDown(true);
    setTimeout(() => {
      setCurrent((prev) => prev - 1);
    }, 500);
  };

  const handleNext = () => {
    setClickedUp(true);
    setTimeout(() => {
      setCurrent((prev) => prev + 1);
    }, 500);
  };

  const handleClose = (e) => {
    e.preventDefault();
    let errorFound = false;
    let question = [];
    for (const key in allAnswers) {
      if (!allAnswers[key].length) {
        question.push(key);
        errorFound = true;
      }
    }
    setError({ state: errorFound, site: question });
    if ( !errorFound ) {
      alert('Los datos fueron guardados exitosamente.')
    }
  };

  const handleOnChange = (e) => {
    setError({ ...error, state: false });
    if (!allAnswers[current + 1].includes(e.target.value)) {
      setAllAnswers({
        ...allAnswers,
        [current + 1]: [...allAnswers[current + 1], e.target.value],
      });
    } else {
      setAllAnswers({
        ...allAnswers,
        [current + 1]: allAnswers[current + 1].filter(
          (el) => el !== e.target.value
        ),
      });
    }
  };

  useEffect(() => {
    setClickedUp(false);
    setClickeDown(false);
  }, [current]);

  return (
    questionsData.length && (
      <section className={s.container}>
        <div className={s.container_div}>
          <form className={s.form}>
            <div
              className={classNames(s.form_h1div, {
                [s.fadeUp]: clickedUp,
                [s.fadeDown]: clickeDown,
              })}
            >
              <h1>
                <span>{current + 1} ➡</span>
                {questionsData[current].question}
              </h1>

              <div className={s.form_divinput}>
                {questionsData[current].answers.map((el, idx) => (
                  <div key={`${el} ${idx} ${current}`} className={s.mycheckbox}>
                    <input
                      type="checkbox"
                      checked={allAnswers[current + 1].includes(el)}
                      value={el}
                      name={idx}
                      id={el}
                      onChange={handleOnChange}
                    />
                    <label htmlFor={el}>{el}</label>
                  </div>
                ))}
              </div>
              {current === questionsData.length - 1 ? (
                <button
                  type="submit"
                  className={s.submit}
                  onClick={handleClose}
                >
                  Enviar mis datos
                </button>
              ) : (
                <button type="button" className={s.submit} onClick={handleNext}>
                  Ok!
                </button>
              )}
              {error.state && (
                <p className={s.error}>{`Pregunta${
                  error.site.length > 1 ? "s" : ""
                } ${error.site.join(
                  ", "
                )}: Selecciona un campo como mínimo.`}</p>
              )}
            </div>
            <div className={s.form_divbutton}>
              <div className={s.form_buttons}>
                <button
                  type="button"
                  disabled={current === 0}
                  onClick={handlePrev}
                >
                  <UilAngleUp />
                </button>
                <button
                  type="button"
                  disabled={current === questionsData.length - 1}
                  onClick={handleNext}
                >
                  <UilAngleDown />
                </button>
              </div>
            </div>
          <p>*No salir hasta terminar o perderá su progreso</p>
          </form>
        </div>
      </section>
    )
  );
}
