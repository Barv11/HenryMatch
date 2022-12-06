import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import LandingPage from "../Components/LandingPage/LandingPage";
import Profile from "../Components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage />} />
      <Route path={"/home"} element={<Home />} />
      <Route path={"/profile"} element={<Profile/>} />
    </Routes>
  );
}

export default App;
