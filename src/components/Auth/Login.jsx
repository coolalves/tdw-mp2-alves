import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Auth.scss";
import "../../styles/App.scss";
import { useAuthValue } from "../../components/Auth/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setTimeActive(true);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="center">
      <Header />
      <div className={"auth-container"}>
        <h1 className={"input-label"}>Enter your account</h1>
        {error && <div className="">{error}</div>}
        <form className={"auth-form"} onSubmit={login} name="login_form">
          <input
            className={"auth-input"}
            type="email"
            value={email}
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={"auth-input"}
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={"custom-button"} type="submit">
            Login
          </button>
        </form>
        <span className={"login-signup-label"}>
          Don't have an account?
          <Link className={"login-signup-label"} to="/register">
            register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
