import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Auth.scss";
import "../../styles/App.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords do not match");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="center">
      <Header />
      <div className={"auth-container"}>
        <h1 className={"input-label"}>Create account</h1>
        {error && <div className="">{error}</div>}
        <form
          className={"auth-form"}
          onSubmit={register}
          name="registration_form"
        >
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

          <input
            className={"auth-input"}
            type="password"
            value={confirmPassword}
            required
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className={"custom-button"} type="submit">
            Register
          </button>
        </form>
        <span className={"login-signup-label"}>
          Already have an account?
          <Link className={"login-signup-label"} to="/login">
            login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
