import Login from "../Components/Login/Login";
import Logout from "../Components/Logout/Logout";
import Profile from "../Components/Profile/Profile";
import axios from "axios";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  const callProtectedApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("http://localhost:3001/user/save", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="App">
      <h1>Match App</h1>
      {isAuthenticated ? <Logout /> : <Login />}
      <Profile />
      <button onClick={callProtectedApi}>Call API protected</button>
    </div>
  );
}

export default App;
