import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./UpdateProfile.module.css";
import { useState } from "react";

export default function UpdateProfile() {
  const [data, setData] = useState({});
  const { user } = useAuth0();

  const handlerOnChange = () => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log('');
  return (
    <main className={s.container}>
      <section>
        <section className={s.update}>
          <section className={s.part}>
            <div className={s.name}>
              <input type="text" name="name" id="name" required />
              <label htmlFor="name">Nombre Completo</label>
            </div>
            <div className={s.name}>
              <input type="text" name="name" id="name2" required />
              <label htmlFor="name2">LinkedIn</label>
            </div>
            <div className={s.name}>
              <input type="text" name="name" id="name3" required />
              <label htmlFor="name3">GitHub</label>
            </div>
            <div className={s.name}>
              <input type="text" name="name" id="name1" required />
              <label htmlFor="name1">Descripción</label>
            </div>
          </section>
          <section className={s.part}>
            <div className={s.name}>
              <input type="text" name="name" id="name4" required />
              <label htmlFor="name4">Nombre Completo</label>
            </div>
            <div className={s.name}>
              <input type="text" name="name" id="name5" required />
              <label htmlFor="name5">Nombre Completo</label>
            </div>
            <div className={s.name}>
              <input type="text" name="name" id="name6" required />
              <label htmlFor="name6">Descripción</label>
            </div>
            <div className={s.name}>
              <textarea type="text" name="name" id="name7" required />
              <label htmlFor="name7">Descripción</label>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
