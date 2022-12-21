import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// import s from "./Login.module.css";

const BootstrapButton = styled(Button)({
  textTransform: "none",
  color: "black",
  width: "80%",
  fontSize: "1rem",
  padding: "3px 16px",
  whiteSpace: "nowrap",
  letterSpacing: "0",
  border: "none",
  backgroundColor: "#ffff01",
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  "&:hover": {
    backgroundColor: "#ffffff",
    borderColor: "none",
    fontWeight: 600,
    boxShadow: "none",
  },
});

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <BootstrapButton onClick={loginWithRedirect} variant="contained">
        Log in
      </BootstrapButton>
    </>
  );
}
