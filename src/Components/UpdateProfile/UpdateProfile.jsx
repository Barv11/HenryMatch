import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./UpdateProfile.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function UpdateProfile({ setOpen }) {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState({});
  const userCurrent = useSelector((state) => state.userCurrent);

  console.log(userCurrent);

  const handlerOnChange = async () => {
    const token = await getAccessTokenSilently();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <section className={s.container} onClick={() => setOpen(false)}>
        <form className={s.update}>
          <h1>Datos Adicionales</h1>
          <div className={s.name}>
            <input type="text" name="linkedIn" id="LinkedIn" required />
            <label htmlFor="LinkedIn">LinkedIn</label>
          </div>
          <div className={s.name}>
            <input type="text" name="gitHub" id="GitHub" required />
            <label htmlFor="GitHub">GitHub</label>
          </div>
          <div className={s.name}>
            <input type="text" name="portfolio" id="Portafolio" required />
            <label htmlFor="Portafolio">Portafolio</label>
          </div>
          <div className={s.name}>
            <textarea
              type="text"
              name="description"
              id="Descripción"
              required
            />
            <label htmlFor="Descripción">Descripción</label>
          </div>
          <div className={s.submit}>
            <button onClick={() => setOpen(false)}>Cancelar</button>
            <button type="submit">Guardar</button>
          </div>
        </form>
      </section>
    </>
  );
}
