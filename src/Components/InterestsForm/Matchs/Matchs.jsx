import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMatchs } from "../../../redux/actions";
import Ribbons from "../../Profile/Ribbons/Ribbons";
import s from "./Matchs.module.css";

export default function Matchs() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userCurrent);
  const userCurrentMatchs = useSelector((state) => state.userCurrentMatchs);
  useEffect(() => {
    dispatch(getMatchs(user));
  }, []);
  console.log(userCurrentMatchs.length);
  return (
    <div className={s.match}>
      <h1>Henry Match (Top #3)</h1>
      <div className={s.top}>
        {userCurrentMatchs.slice(0, 3).map((el, id) => (
          <div className={s.top_div} key={el.nickname}>
            <div className={s.icon}>
              <Ribbons top={id + 1} />
              <img src={el.picture} alt={el.nickname} />
            </div>
            <div>
              <span>{el.firstname}</span>
              <Link to={"/match/henry/" + el.id} className={s.link}>
                Visitar
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={s.others}>
        {userCurrentMatchs.slice(3, 10).map((el, id) => (
          <div className={s.top_div} key={el.nickname}>
            {id + 4}
            <img src={el.picture} alt={el.nickname} />
            <div>
              <span>{el.firstname}</span>
              <Link to={"/match/henry/" + el.id} className={s.link}>
                Visitar
              </Link>
            </div>
          </div>
        ))}
        {userCurrentMatchs.length > 10 && (
          <>
            <b>.</b>
            <b>.</b>
            <b>.</b>
          </>
        )}
      </div>
    </div>
  );
}
