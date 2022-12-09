import React from "react";
import { useState } from "react";
import "./FetchQuote.scss";
import "../../styles/App.scss";
import ActionButtons from "../ActionButtons/ActionButtons";
import axios from "axios";

const FetchQuote = () => {
  const [quoteButton, setQuoteButton] = useState("get a quote");
  const [quote, setQuote] = useState("");
  const [gotQuote, setGotQuote] = useState(false);
  const handleClick = async () => {
    const response = await axios.get("https://api.kanye.rest");
    setQuote(response.data.quote);
    setGotQuote(true);
    setQuoteButton("change quote");
  };

  return (
    <div className={"container"}>
      <p className={"quote-text"}>{quote}</p>
      <button onClick={handleClick} className={"custom-button"}>
        {" "}
        {quoteButton}
      </button>
      {gotQuote ? <ActionButtons props={quote} /> : null}
    </div>
  );
};

export default FetchQuote;
