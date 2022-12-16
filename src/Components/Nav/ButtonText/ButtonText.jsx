import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  boxShadow: "rgb(0 0 0 / 30%) 0px 1px 2px, rgb(0 0 0 / 15%) 0px 1px 3px 1px",
  textTransform: "none",
  whiteSpace: "nowrap",
  color: "black",
  fontSize: "1rem",
  padding: "0.6em 4em",
  letterSpacing: "0.2em",
  border: "none",
  backgroundColor: "white",
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  "&:hover": {
    backgroundColor: "#000000",
    color: "#ffffff",
    borderColor: "none",
    boxShadow: "none",
  },
});

export default function ButtonText(props) {
  return (
    <>
      <BootstrapButton onClick={props?.onClick} variant="contained">
        {props.text}
      </BootstrapButton>
    </>
  );
}
