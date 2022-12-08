import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  UilGithub,
  UilLinkedin,
  UilFileDownloadAlt,
  // UilWhatsapp,
} from "@iconscout/react-unicons";
import s from "./Profile.module.css";
import Rocket from "./Rocket/Rocket";
import Loader from "../Loader/Loader";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Loader />;
  } else {
    return (
      <>
        <main className={s.container}>
          <section className={s.profile}>
            <section className={s.card}>
              <img src={user?.picture} alt="" />
              <h2>{user?.name}</h2>
              {/* <p>{user?.email}</p> */}
              <p>{user?.nickname}</p>
            </section>
            <div className={s.icons}>
              <a
                data-foo="GitHub"
                href="https://github.com/Barv11"
                target="BLANK"
              >
                <UilGithub /> Github
              </a>
              <a
                data-foo="LinkedIn"
                href="https://www.linkedin.com/in/barv11/"
                target="BLANK"
              >
                <UilLinkedin /> LinkedIn
              </a>
            </div>
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
        </main>
      </>
    );
  }
}
