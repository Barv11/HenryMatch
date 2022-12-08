import { Route, Routes } from "react-router-dom";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import LandingPage from "../Components/LandingPage/LandingPage";
import Loader from "../Components/Loader/Loader";
import Login from "../Components/Login/Login";
import Nav from "../Components/Nav/Nav";
import Profile from "../Components/Profile/Profile";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import "./App.css";

function App() {
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
