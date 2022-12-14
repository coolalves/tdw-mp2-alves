import { React } from "react";
import "../styles/App.scss";
import FetchQuote from ".././components/FetchQuote/FetchQuote";
import Header from ".././components/Header/Header";
import Nav from ".././components/Nav/Nav";

const Main = () => {
  return (
    <>
      <Header />
      <Nav linkA={"about"} linkB={"feed"} />
      <FetchQuote />

    </>
  );
};

export default Main;
