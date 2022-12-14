import React, { useState, useEffect } from "react";
import "./FetchQuote.scss";
import "../../styles/App.scss";
import ActionButtons from "../ActionButtons/ActionButtons";
import axios from "axios";
import { useSelector } from "react-redux";

const FetchQuote = () => {
  const [quatrain, setQuatrain] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [submit, setSubmit] = useState(false);

  const reduxState = useSelector(state => state.quatrain);

  useEffect(() => {
    if (reduxState != null) {
      setTitle(reduxState.title);
      setAuthor(reduxState.author);
      setQuatrain(reduxState.quatrain);
      if (reduxState.quatrain.length > 0) {
        setSubmit(true);
      }
    }
  }, []);

  const handleClick = async () => {
    // create a quatrain array
    let quatrain = [];
    for (let i = 0; i < 4; i++) {
      const response = await axios.get("https://api.kanye.rest/");
      quatrain.push(response.data.quote);
    }
    // update the quatrain state with the quatrain array
    setQuatrain(quatrain);
    setSubmit(true);
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
          style={{ display: submit ? "block" : "none" }}
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
              placeholder="name your quatrain"
              onChange={(e) => setTitle(e.target.value)}
              className={"quatrain-header"}
            />
            <input
              type="text"
              value={author}
              placeholder="author name"
              onChange={(e) => setAuthor(e.target.value)}
              className={"quatrain-header"}
            />
            {body}
          </div>
        </div>
        <button
          style={{ display: !submit ? "block" : "none" }}
          onClick={handleClick}
          className={"custom-button"}
        >
          generate
        </button>

        {submit ? <ActionButtons quatrain={quatrain} title={title} author={author} /> : null}
      </div>
    </>
  );
};

export default FetchQuote;
