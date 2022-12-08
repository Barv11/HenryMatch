import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// import s from "./Login.module.css";

const BootstrapButton = styled(Button)({
  boxShadow: "rgb(0 0 0 / 30%) 0px 1px 2px, rgb(0 0 0 / 15%) 0px 1px 3px 1px",
  textTransform: "none",
  color: "black",
  width: "80%",
  fontSize: "1rem",
  padding: "3px 16px",
  letterSpacing: "0",
  border: "none",
  backgroundColor: "#ffff01",
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  "&:hover": {
    backgroundColor: "#d8d800",
    borderColor: "none",
    boxShadow: "none",
  },
});

export default function Login() {
  const { loginWithPopup } = useAuth0();
  return (
    <>
      <BootstrapButton onClick={loginWithPopup} variant="contained">
        Log in
      </BootstrapButton>
    </>
  );
}
