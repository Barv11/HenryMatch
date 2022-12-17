import React from "react";
import Login from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../redux/actions";

import s from "./LandingPage.module.css";

export default function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const userCurrent = useSelector((state) => state.userCurrent);

  useEffect(async () => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      dispatch(saveUser(token));
    }
  }, [isAuthenticated]);

  useEffect(() => {
    console.log(userCurrent)
    if (Object.entries(userCurrent).length) {
      navigate("/match");
    }
  }, [userCurrent]);

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
