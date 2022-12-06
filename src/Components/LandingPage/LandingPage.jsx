import React from "react";
import Login from "../Login/Login";
import s from "./LandingPage.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);

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
