import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./Logout.module.css"

export default function Logout() {
  const { logout } = useAuth0();
  return (
      <button onClick={() => logout()} className={s.logout}>Logout</button>
  );
}
