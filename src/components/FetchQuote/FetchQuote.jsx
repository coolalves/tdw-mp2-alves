import React, { useState } from "react";
import "./FetchQuote.scss";
import "../../styles/App.scss";
import ActionButtons from "../ActionButtons/ActionButtons";
import axios from "axios";
import { Link } from "react-router-dom";

const FetchQuote = () => {
  const [quoteButton, setQuoteButton] = useState(true);
  const [quatrain, setQuatrain] = useState([]);
  const [gotQuote, setGotQuote] = useState(false);
  const [title, setTitle] = useState("name your quatrain");
  const [author, setAuthor] = useState("your name");
  const [showChangeVerse, setShowChangeVerse] = useState(false);

  const handleClick = async () => {
    // create a quatrain array
    let quatrain = [];
    for (let i = 0; i < 4; i++) {
      const response = await axios.get("https://api.kanye.rest/");
      quatrain.push(response.data.quote);
    }
    // update the quatrain state with the quatrain array
    setQuatrain(quatrain);
    setGotQuote(true);
    setQuoteButton(false);
    setShowChangeVerse(true);
  };

  const changeVerse = async (i) => {
    const response = await axios.get("https://api.kanye.rest/");
    let newArr = [...quatrain];
    newArr[i] = response.data.quote;
    setQuatrain(newArr);
    console.log(newArr);
  };

  const body = quatrain.map((e, key) => {
    return (
      <div className={"verse-container"} key={key}>
        <p className={"quatrain-text"}> {quatrain[key]} </p>
        <button
          style={{ display: showChangeVerse ? "block" : "none" }}
          className={"custom-button-small"}
          onClick={() => changeVerse(key)}
        >
          replace verse
        </button>
      </div>
    );
  });

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
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className={"quatrain-header"}
            />
            {body}
          </div>
        </div>
        <button
          style={{ display: quoteButton ? "block" : "none" }}
          onClick={handleClick}
          className={"custom-button"}
        >
          generate
        </button>

        {gotQuote ? <ActionButtons quatrain={quatrain} title={title} author={author} /> : null}
      </div>
    </>
  );
};

export default FetchQuote;
