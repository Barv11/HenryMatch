import React from "react";
import { useSelector } from "react-redux";
import { UilGithub, UilLinkedin, UilSuitcase } from "@iconscout/react-unicons";
import s from "./Profile.module.css";
import Rocket from "./Rocket/Rocket";
import Loader from "../Loader/Loader";

export default function Profile() {
  const user = useSelector((state) => state.userCurrent);

  console.log("profile", user);

  if (user === null || !Object.entries(user).length) {
    return <Loader />;
  } else {
    return (
      <>
        <section className={s.profile}>
          <section className={s.card}>
            <img src={user.picture} alt="" />
            <h2>{user.name}</h2>
            {/* <p>{user.email}</p> */}
            <p>{user.nickname}</p>
          </section>
          <div className={s.icons}>
            {user.linkedIn ? (
              <a data-foo="LinkedIn" href={user.linkedIn} target="BLANK">
                <UilLinkedin /> LinkedIn
              </a>
            ) : null}
            {user.gitHub ? (
              <a data-foo="GitHub" href={user.gitHub} target="BLANK">
                <UilGithub /> GitHub
              </a>
            ) : null}
            {user.portfolio ? (
              <a data-foo="Portafolio" href={user.portfolio} target="BLANK">
                <UilSuitcase /> Portafolio
              </a>
            ) : null}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            veritatis sint alias minus magnam itaque velit, placeat provident
            rerum ab dignissimos cumque, consequatur sed dicta praesentium vitae
            illum blanditiis culpa?
          </p>
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
      </>
    );
  }
}
