import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  UilGithub,
  UilLinkedin,
  UilSuitcase,
  UilMapMarker,
} from "@iconscout/react-unicons";
import Rocket from "./Rocket/Rocket";
import Loader from "../Loader/Loader";
import { clearUser, getMatchs, searchUserById } from "../../redux/actions";
import s from "./Profile.module.css";
import Ribbons from "./Ribbons/Ribbons";

export default function Profile() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [current, setCurrent] = useState({});
  const user = useSelector((state) => state.userCurrent);
  const henry = useSelector((state) => state.userHenry);
  const userCurrentMatchs = useSelector((state) => state.userCurrentMatchs);
  const { id } = useParams();

  useEffect(async () => {
    dispatch(clearUser());
    setTimeout(async () => {
      if (id) {
        dispatch(searchUserById(id));
      }
    }, 3000);
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

  useEffect(() => {
    return () => {
      dispatch(clearUser());
    };
  }, []);

  useEffect(() => {
    if (Object.entries(current).length && current.interests) {
      dispatch(getMatchs(current));
    }
  }, [current]);

  console.log(Boolean(userCurrentMatchs.length && !id));

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
            {current.interests ? (
              <div className={s.interests}>
                <h1>Intereses</h1>
                {current.interests.map((obj, idx) => (
                  <div key={obj.questions} className={s.facts}>
                    <div className={s.facts_h2}>
                      <h2>
                        <span>{idx + 1} ➡</span> {obj.questions}
                      </h2>
                    </div>
                    <div className={s.answers}>
                      {obj.answers.map((answer, id) => (
                        <React.Fragment key={`${answer} ${idx + id}`}>
                          <span>{answer}</span>
                          {id < obj.answers.length - 1 && <b>|</b>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            {userCurrentMatchs.length && !id ? (
              <div className={s.match}>
                <h1>Henry Match (Top #3)</h1>
                <div className={s.top}>
                  {userCurrentMatchs.slice(0, 3).map((el, id) => (
                    <div className={s.top_div} key={el.nickname}>
                      <Ribbons top={id + 1} />
                      <img src={el.picture} alt={el.nickname} />
                      <div>
                        <span>{el.firstname}</span>
                        <Link to={"/match/henry/" + el.id} className={s.link}>
                          Visitar
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        </section>
      </>
    );
  }
}
