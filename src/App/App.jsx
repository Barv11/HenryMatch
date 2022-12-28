import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import InterestForm from "../Components/InterestsForm/InterestForm";
import InviteLogin from "../Components/InviteLogin/InviteLogin";
import LandingPage from "../Components/LandingPage/LandingPage";
import Nav from "../Components/Nav/Nav";
import NotFound from "../Components/NotFound/NotFound";
import Profile from "../Components/Profile/Profile";
import Welcome from "../Components/Welcome/Welcome";
import {
  getAllUsers,
  getCountries,
  getQuestions,
  searchUser,
  setRegistered,
} from "../redux/actions";
import "./App.css";

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const userCurrent = useSelector((state) => state.userCurrent);
  const message = useSelector((state) => state.message);

  useEffect(async () => {
    if (!Object.entries(userCurrent).length && isAuthenticated) {
      const token = await getAccessTokenSilently();
      dispatch(getQuestions(token));
      dispatch(searchUser(token));
      dispatch(getAllUsers(token));
    }
    dispatch(setRegistered(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    // dispatch(getCountries());
  }, []);

  console.log(message);
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/invite" element={<InviteLogin />} />
        <Route path="/match/*" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="me" element={<Profile />} />
          <Route path="henry/:id" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="interest" element={<InterestForm />} />
          {/* <Route path="*" element={<Navigate to="404" replace />} /> */}
          {/* <Route path="404" element={<NotFound />} /> */}
        </Route>
        {/* <Route path="*" element={<Navigate to="/match/404" replace />} /> */}
      </Routes>
    </>
  );
}

export default App;
