import React, { useEffect } from "react";
import { useState } from "react";
import "./FetchQuote.scss";
import "../../styles/App.scss";
import ActionButtons from "../ActionButtons/ActionButtons";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Auth/Auth.scss";

const FetchQuote = () => {
  const [quoteButton, setQuoteButton] = useState(true);
  const [quatrain, setQuatrain] = useState([]);
  const arrData = [];
  const [gotQuote, setGotQuote] = useState(false);
  const [title, setTitle] = useState("name your quatrain here");
  const [showChangeVerse, setShowChangeVerse] = useState(false);

  const handleClick = async () => {
    for (let i = 0; i < 4; i++) {
      const response = await axios.get("https://api.quotable.io/random");
      arrData.push(response.data.content);
    }
    setQuatrain(arrData);
    setGotQuote(true);
    setQuoteButton(false);
    setShowChangeVerse(true);
  };

  const changeVerse = async (i) => {
    const response = await axios.get("https://api.quotable.io/random");
    let newArr = quatrain;
    newArr[i] = response.data.content;
    setQuatrain(newArr);
    console.log(newArr);
  };

  return (
    <>
      <div className={"container"}>
        <div className={"quatrain-container"}>
          <div className={"quatrain"}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={"quatrain-header"}
            />
            <div>
              <p className={"quatrain-text"}> {quatrain[0]} </p>
              <button
                style={{ display: showChangeVerse ? "block" : "none" }}
                className={"custom-button"}
                onClick={() => changeVerse(0)}
              >
                change quote
              </button>

              <p className={"quatrain-text"}> {quatrain[1]} </p>
              <button
                style={{ display: showChangeVerse ? "block" : "none" }}
                className={"custom-button"}
                onClick={() => changeVerse(1)}
              >
                change quote
              </button>

              <p className={"quatrain-text"}> {quatrain[2]} </p>
              <button
                style={{ display: showChangeVerse ? "block" : "none" }}
                className={"custom-button"}
                onClick={() => changeVerse(2)}
              >
                change quote
              </button>

              <p className={"quatrain-text"}> {quatrain[3]} </p>
              <button
                style={{ display: showChangeVerse ? "block" : "none" }}
                className={"custom-button"}
                onClick={() => changeVerse(3)}
              >
                change quote
              </button>
            </div>
          </div>
        </div>
        <button
          style={{ display: quoteButton ? "block" : "none" }}
          onClick={handleClick}
          className={"custom-button"}
        >
          get a quatrain
        </button>
        {gotQuote ? <ActionButtons props={quatrain} /> : null}
      </div>
      <div className={"container"}>
        <span>
          <Link className={"login-signup-label"} to="/register">
            authenticate
          </Link>
        </span>
      </div>
    </>
  );
};

export default FetchQuote;
