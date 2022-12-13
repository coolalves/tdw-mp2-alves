import { React, useState, useEffect } from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Main from "./pages/Main";
import Submit from "./pages/Submit";
import Feed from "./pages/Feed";
import { AuthProvider } from "../src/components/Auth/AuthContext";
import { auth } from "../src/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/submit" element={<Submit />} />
        <Route exact path="/feed" element={<Feed />} />
        <Route
          path="/register"
          element={
            !currentUser?.emailVerified ? (
              <Register />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            !currentUser?.emailVerified ? (
              <Login />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
