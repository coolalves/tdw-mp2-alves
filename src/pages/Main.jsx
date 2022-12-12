import { React } from "react";
import "../styles/App.scss";
import FetchQuote from ".././components/FetchQuote/FetchQuote";
import Header from ".././components/Header/Header";
import { useAuthValue } from "../components/Auth/AuthContext";
//import { Navigate } from "react-router-dom";

const Main = () => {
  //const { currentUser } = useAuthValue();
  console.log(useAuthValue());
  return (
    <>
      <Header />
      <FetchQuote />
    </>
  );
};

export default Main;
