import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import UserList from "./pages/UserList";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import { useEffect, useState } from "react";

function App() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("loginToken"));
    setAccessToken(storedToken);
  }, []);

  console.log(accessToken);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
