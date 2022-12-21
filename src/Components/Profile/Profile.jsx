import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import {
  UilGithub,
  UilLinkedin,
  UilSuitcase,
  UilMapMarker,
} from "@iconscout/react-unicons";
import Rocket from "./Rocket/Rocket";
import Loader from "../Loader/Loader";
import { clearUser, searchUser, searchUserById } from "../../redux/actions";
import s from "./Profile.module.css";

export default function Profile() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { getAccessTokenSilently } = useAuth0();
  const [current, setCurrent] = useState({});
  const user = useSelector((state) => state.userCurrent);
  const henry = useSelector((state) => state.userHenry);
  const { id } = useParams();

  useEffect(async () => {
    const token = await getAccessTokenSilently();

    dispatch(clearUser());

    setTimeout(async () => {
      if (id) {
        dispatch(searchUserById({ token, id }));
      }
    }, 1000);

    return () => {
      dispatch(clearUser());
    };
  }, [location]);

  useEffect(() => {
    if (id) {
      document.title = "Henry Match | " + henry.name;
      setCurrent(henry);
    } else {
      document.title = "Henry Match | " + user.name;
      setCurrent(user);
    }
  }, [henry, user]);

  if (!Object.entries(current).length) {
    return <Loader text="Buscando un Henry" />;
  } else {
    return (
      <>
        <section className={s.cont}>
          <section className={s.profile}>
            <section className={s.card}>
              <img src={current.picture} alt="" />
              {current.country && (
                <span>
                  <UilMapMarker /> {current.country} - {current.state}
                </span>
              )}
              <h2>{current.name}</h2>
              <p>{current.nickname}</p>
            </section>
            <div className={s.icons}>
              {current.linkedIn ? (
                <a data-foo="LinkedIn" href={current.linkedIn} target="BLANK">
                  <UilLinkedin /> LinkedIn
                </a>
              ) : null}
              {current.gitHub ? (
                <a data-foo="GitHub" href={current.gitHub} target="BLANK">
                  <UilGithub /> GitHub
                </a>
              ) : null}
              {current.portfolio ? (
                <a
                  data-foo="Portafolio"
                  href={current.portfolio}
                  target="BLANK"
                >
                  <UilSuitcase /> Portafolio
                </a>
              ) : null}
            </div>
            {current.description ? <p>{current.description}</p> : null}
            <div className={s.rocket}>
              <Rocket />
              <Rocket />
              <Rocket />
              <Rocket />
              <Rocket />
              <Rocket />
              <Rocket />
              <Rocket />
            </div>
          </section>
        </section>
      </>
    );
  }
}
