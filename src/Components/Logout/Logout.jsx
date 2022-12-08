import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { UilSignout } from "@iconscout/react-unicons";
// import s from "./Logout.module.css";

const BootstrapButton = styled(Button)({
  boxShadow: "rgb(0 0 0 / 30%) 0px 1px 2px, rgb(0 0 0 / 15%) 0px 1px 3px 1px",
  textTransform: "none",
  color: "black",
  width: "120px",
  fontSize: "1rem",
  padding: "3px 16px",
  letterSpacing: "0",
  border: "none",
  backgroundColor: "white",
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  "&:hover": {
    backgroundColor: "#c2c2c2",
    borderColor: "none",
    boxShadow: "none",
  },
});

export default function Logout() {
  const { logout } = useAuth0();
  return (
    <>
      <BootstrapButton onClick={logout} variant="contained">
        <UilSignout/> Log out
      </BootstrapButton>
    </>
  );
}
