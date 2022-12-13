import React from "react";
import s from "./Home.module.css";
import Prueba from "./Prueba/Prueba";

export default function Home() {
  return (
    <section className={s.container}>
      <h1>Match App!!</h1>
      <Prueba />
    </section>
  );
}
