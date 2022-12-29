import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";

import { useAuth0 } from "@auth0/auth0-react";
import { UilAngleUp, UilAngleDown } from "@iconscout/react-unicons";

import s from "./InterestForm.module.css";
import { saveInterests, isLoading } from "../../redux/actions";
import Matchs from "./Matchs/Matchs";
import Loader from "../Loader/Loader";

export default function InterestForm() {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const [clickedUp, setClickedUp] = useState(false);
  const [clickeDown, setClickeDown] = useState(false);
  const [error, setError] = useState({
    state: false,
    site: [],
  });

  const [current, setCurrent] = useState(0);

  const [allAnswers, setAllAnswers] = useState([
    {
      question: "",
      answers: [],
    },
    {
      question: "",
      answers: [],
    },
    {
      question: "",
      answers: [],
    },
    {
      question: "",
      answers: [],
    },
    {
      question: "",
      answers: [],
    },
    {
      question: "",
      answers: [],
    },
    {
      question: "",
      answers: [],
    },
    {
      question: "",
      answers: [],
    },
    {
      question: "",
      answers: [],
    },
  ]);

  const questionsData = useSelector((state) => state.questions);
  const isLoadingForm = useSelector((state) => state.isLoading);
  const showMatchsForm = useSelector((state) => state.showMatchs);

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

  const handleClose = async (e) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();

    const question = allAnswers
      .map((item, index) => (item.answers.length === 0 ? index + 1 : null))
      .filter((index) => index !== null);

    if (question.length) {
      setError({ state: true, site: question });
    } else {
      console.log("Enviando datos");
      setClickeDown(true);
      setTimeout(() => {
        setClickeDown(false);
        dispatch(isLoading(true));
        dispatch(saveInterests({ token, data: allAnswers }));
      }, 500);
    }
  };

  const handleOnChange = (e) => {
    setError({ ...error, state: false });
    if (!allAnswers[current].answers.includes(e.target.value)) {
      setAllAnswers((prev) => {
        const data = [...prev];
        data[current] = {
          questions: questionsData[current].question,
          answers: [...allAnswers[current].answers, e.target.value],
        };
        return data;
      });
    } else {
      setAllAnswers((prev) => {
        const data = [...prev];
        data[current] = {
          questions: questionsData[current].question,
          answers: allAnswers[current].answers.filter(
            (el) => el !== e.target.value
          ),
        };
        return data;
      });
    }
  };

  useEffect(() => {
    setClickedUp(false);
    setClickeDown(false);
  }, [current]);

  useEffect(() => {
    document.title = "Henry Match | Interéses";
  }, []);

  return (
    questionsData.length && (
      <section className={s.container}>
        <div className={s.container_div}>
          {isLoadingForm ? (
            <Loader text="Buscando coincidencias..." />
          ) : showMatchsForm ? (
            <Matchs />
          ) : (
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
                    <div
                      key={`${el} ${idx} ${current}`}
                      className={s.mycheckbox}
                    >
                      <input
                        type="checkbox"
                        checked={allAnswers[current].answers.includes(el)}
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
                  <button
                    type="button"
                    className={s.submit}
                    onClick={handleNext}
                  >
                    Siguiente!
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
          )}
        </div>
      </section>
    )
  );
}
