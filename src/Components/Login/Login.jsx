import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./Login.module.css"

export default function Login() {
  const { loginWithPopup } = useAuth0();
  return (
      <button className={s.login} onClick={() => loginWithPopup()}>Log In</button>
  );
}
