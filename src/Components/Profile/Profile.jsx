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
        <section className={s.profile}>
          <section className={s.card}>
            <img src={user?.picture} alt="" />
            <h2>{user?.name}</h2>
            {/* <p>{user?.email}</p> */}
            <p>{user?.nickname}</p>
          </section>
          <div className={s.icons}>
            <a data-foo="GitHub" href="#" target="BLANK">
              <UilGithub /> Github
            </a>
            <a data-foo="LinkedIn" href="#" target="BLANK">
              <UilLinkedin /> LinkedIn
            </a>
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
