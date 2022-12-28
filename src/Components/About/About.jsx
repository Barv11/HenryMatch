import React, { useEffect } from "react";
import s from "./About.module.css";

export default function About() {
  useEffect(() => {
    document.title = "Henry Match | Nosotros";
  }, []);

  return (
    <section className={s.container}>
      <section className={s.title}>
        <span>Nuestra misión</span>
        <h1>
          <b>Hola, #SoyHenry!</b> Estamos potenciando el talento digital futuro
        </h1>
      </section>
      <section className={s.blockWhy}>
        <div className={s.izqWhy}>
          <span>UN POCO DE NUESTRO ORIGEN</span>
          <h1>¿Por qué creamos Henry?</h1>
          <p>
            Queremos acelerar la transición hacia la igualdad a través de la
            educación.
          </p>
          <p>
            Dicen que la educación es la mejor inversión que puedes hacer en tu
            vida, nosotros decimos que alguien debería estar invirtiendo en tu
            educación.
          </p>
          <p>
            Democratizamos el acceso a la educación en carreras tecnológicas a
            través de un sistema innovador de financiamiento y 100% digital.
            Trabajamos todos los días para poder INVERTIR en potencial humano,
            INVERTIR en el talento del futuro. Te brindamos el conocimiento y
            las herramientas necesarias para acceder a un mundo de
            oportunidades.
          </p>
          <p>
            Somos un equipo de emprendedores, diseñadores, programadores,
            creativos e instructores con mucha experiencia en la industria tech.
            Contamos con el apoyo de los inversores de mayor prestigio de
            Silicon Valley, USA, que apoyan nuestra visión.
          </p>
          <p>
            Si crees que sos un Henry, no esperes más, y súmate a esta
            revolución ¡Esperamos poder conocerte y acelerar tu carrera AHORA!
          </p>
        </div>
        <div className={s.derWhy}>
          <img src="/henrycoffee.jpg" alt="Henry" />
        </div>
      </section>
    </section>
  );
}
