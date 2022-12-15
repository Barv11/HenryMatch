import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryStates, searchUser, updateUser } from "../../redux/actions";
import s from "./UpdateProfile.module.css";

export default function UpdateProfile({ setOpenModal }) {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState({});
  const [closed, setClosed] = useState(false);
  // const message = useSelector((state) => state.message);
  const countries = useSelector((state) => state.countries);
  const states = useSelector((state) => state.states);

  const handlerOnChange = (e) => {
    if (e.target.name === "country") {
      dispatch(getCountryStates(e.target.value));
    }
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlerOnSubmit = async (e) => {
    const token = await getAccessTokenSilently();
    e.preventDefault();
    setClosed(true);
    dispatch(updateUser(token, data));
    setTimeout(() => {
      dispatch(searchUser(token));
      setOpenModal(false);
    }, 1000);
  };

  const handlerOnClosed = () => {
    setClosed(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 1000);
  };

  const handleClear = () => {
    document.getElementById("myForm").reset();
  };

  return (
    <>
      <section
        className={`${s.container} ${closed ? s.containerClosed : null}`}
      >
        <form
          id="myForm"
          className={`${s.update} ${closed ? s.updateClosed : null}`}
          onSubmit={handlerOnSubmit}
        >
          <h1>Datos Adicionales</h1>
          <div className={s.rowInput}>
            <div className={s.name}>
              <select onChange={handlerOnChange} name="country" id="Pais">
                <option value="" hidden></option>
                {countries.length
                  ? countries.map((el, idx) => (
                      <option key={idx} value={el.name}>
                        {el.name}
                      </option>
                    ))
                  : null}
              </select>
              <label htmlFor="Pais">País</label>
            </div>
            <div className={s.name}>
              <select
                onChange={handlerOnChange}
                name="state"
                id="Provincia"
                required={data?.country?.length}
              >
                <option value="" hidden></option>
                {states.length ? (
                  states.map((el, idx) => (
                    <option key={idx} value={el.name}>
                      {el.name}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    Elija un país
                  </option>
                )}
              </select>
              <label htmlFor="Provincia">Provincia</label>
            </div>
          </div>
          <div className={s.name}>
            <input
              onChange={handlerOnChange}
              placeholder=" "
              type="text"
              name="linkedIn"
              id="LinkedIn"
            />
            <label htmlFor="LinkedIn">LinkedIn</label>
          </div>
          <div className={s.name}>
            <input
              onChange={handlerOnChange}
              placeholder=" "
              type="text"
              name="gitHub"
              id="GitHub"
            />
            <label htmlFor="GitHub">GitHub</label>
          </div>
          <div className={s.name}>
            <input
              onChange={handlerOnChange}
              placeholder=" "
              type="text"
              name="portfolio"
              id="Portafolio"
            />
            <label htmlFor="Portafolio">Portafolio</label>
          </div>
          <div className={s.name}>
            <textarea
              onChange={handlerOnChange}
              placeholder=" "
              type="text"
              name="description"
              id="Descripción"
            />
            <label htmlFor="Descripción">Descripción</label>
          </div>
          <div className={s.submit}>
            <button type="submit" onClick={handlerOnSubmit}>
              Guardar
            </button>
            <button type="reset" onClick={handleClear}>
              Limpiar
            </button>
            <button type="button" onClick={handlerOnClosed}>
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
