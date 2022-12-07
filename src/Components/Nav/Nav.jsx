import React from "react";
import Logout from "../Logout/Logout";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./Nav.module.css";

export default function Nav() {
  const { user } = useAuth0();

  return (
    <header className={s.container}>
      <img
        src="https://www.soyhenry.com/_next/image?url=https%3A%2F%2Fassets.soyhenry.com%2Fhenry-landing%2Fassets%2FHenry%2Flogo-white.png&w=128&q=75"
        alt="Henry"
      />
      <nav>
        <NavLink to={"/home"} className={s.link}>
          Inicio
        </NavLink>
        <NavLink to={"/profile"} className={s.link}>
          Perfil
        </NavLink>
      </nav>
      <section>
        {/* <NavLink to={"/profile"}>Profile</NavLink> */}
        <p>
          Hola, <b>{user?.given_name}!</b>
        </p>
        <img
          src={
            user
              ? user.picture
              : "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
          }
          alt={user?.name}
        />
        <Logout />
      </section>
    </header>
  );
}
