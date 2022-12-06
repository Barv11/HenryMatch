import React from "react";
import Loader from "../Loader/Loader";
import Nav from "../Nav/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <h1>Match App</h1>
      <Loader/>
    </div>
  );
}
