import React from "react";
import { useState } from "react";
import { UilExclamationTriangle } from "@iconscout/react-unicons";
import s from "./InviteLogin.module.css";
import { useEffect } from "react";

export default function InviteLogin({ setOpenInvit }) {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setClosed(true);
      setTimeout(() => {
        setOpenInvit(false);
      }, 1000);
    }, 5000);
  }, []);
  return (
    <>
      <section
        className={`${s.container}`}
        onClick={() => {
          setClosed(true);
          setTimeout(() => {
            setOpenInvit(false);
          }, 1000);
        }}
      >
        <section className={`${s.invite} ${closed && s.inviteClosed}`}>
          <UilExclamationTriangle />
          <h1>Inicia sesión para continuar</h1>
        </section>
      </section>
    </>
  );
}
