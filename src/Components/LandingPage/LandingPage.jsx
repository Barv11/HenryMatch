import React from "react";
import Login from "../Login/Login";

import s from "./LandingPage.module.css";

export default function LandingPage() {

  return (
    <main className={s.container}>
      <section className={s.login}>
        <p>
          Bienvenido a <b>Henry Match</b>
        </p>
        <Login />
      </section>
    </main>
  );
}
