import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./Profile.module.css";
import Nav from "../Nav/Nav";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <Nav />
      {isAuthenticated && (
        <div className={s.App}>
          <img src={user?.picture} alt="" />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
          <p>{user?.nickname}</p>
        </div>
      )}
    </>
  );
}
