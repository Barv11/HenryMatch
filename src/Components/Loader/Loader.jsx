import s from "./Loader.module.css";

import React from "react";

export default function Loader(props) {
  return (
    <div className={s.container}>
      {props.text ? <p>{props.text}</p> : null}
      <div className={s.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
