import React, { useEffect } from "react";
import s from "./About.module.css";

export default function About() {
  useEffect(() => {
    document.title = "Henry Match | Nosotros";
  }, []);

  return (
    <section className={s.container}>
      About
      <div></div>
    </section>
  );
}
