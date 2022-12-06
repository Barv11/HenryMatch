import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../redux/actions";

export default function Login() {
  const { loginWithPopup, isAuthenticated } = useAuth0();
  // const dispatch = useDispatch();

  const logIn = () => {
    // dispatch(userLogIn())
  }

  return (
    <div>
      <button onClick={() => loginWithPopup()}>Login</button>
    </div>
  );
}
