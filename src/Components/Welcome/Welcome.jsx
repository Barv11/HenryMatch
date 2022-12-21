import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { saveUser } from "../../redux/actions";
import s from "./Welcome.module.css";

export default function Welcome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const userCurrent = useSelector((state) => state.userCurrent);

  useEffect(async () => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      setTimeout(() => {
        dispatch(saveUser(token));
      }, 5000);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (Object.entries(userCurrent).length) {
      navigate("/match");
    }
  }, [userCurrent]);

  useEffect(() => {
    document.title = "Welcome to Henry Match";
  }, []);

  return (
    <>
      <section className={s.container}>
        <span className={s.p1}>
          Gracias por elegir a <b>Henry Match</b>
        </span>
        <span className={s.p2}>
          Pronto serás redireccionado
          <span className={s.sus}>...</span>
        </span>
      </section>
    </>
  );
}
