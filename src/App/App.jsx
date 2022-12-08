import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import LandingPage from "../Components/LandingPage/LandingPage";
import Loader from "../Components/Loader/Loader";
import Login from "../Components/Login/Login";
import Nav from "../Components/Nav/Nav";
import Profile from "../Components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/match/*" element={<Nav />}>
          {/* <Route index element={<Home />} /> */}
          <Route index loader={<Loader />} element={<Home />} />
          <Route path="me" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
