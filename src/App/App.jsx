import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import LandingPage from "../Components/LandingPage/LandingPage";
import Loader from "../Components/Loader/Loader";
import Nav from "../Components/Nav/Nav";
import Profile from "../Components/Profile/Profile";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import { searchUser } from "../redux/actions";
import "./App.css";

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const dispatch = useDispatch();

  const userCurrent = useSelector((state) => state.userCurrent);

  useEffect(async () => {
    if (!Object.entries(userCurrent).length && isAuthenticated) {
      const token = await getAccessTokenSilently();
      dispatch(searchUser(token));
    }
  }, [isAuthenticated]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/match/*" element={<Nav />}>
          <Route index loader={<Loader />} element={<Home />} />
          <Route path="me" element={<Profile />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/update" element={<UpdateProfile />} />
        <Route path="*" element={<UpdateProfile />} />
      </Routes>
    </>
  );
}

export default App;
