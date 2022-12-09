import { React } from "react";
import "../styles/App.scss";
import FetchQuote from ".././components/FetchQuote/FetchQuote";
import Header from ".././components/Header/Header";
//import { Navigate } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <FetchQuote />
    </>
  );
};

export default Main;
