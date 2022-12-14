import React, { useEffect } from "react";
import { useState } from "react";
import "../components/FetchQuote/FetchQuote.scss";
import "../styles/App.scss";
import Header from "../components/Header/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../components/Auth/Auth.scss";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { handleUpload } from "../firebase/firebase.js";

const Submit = () => {
  const location = useLocation();
  const title = location.state.title;
  const quatrain = location.state.quatrain;
  const author = location.state.author;

  const mappedQuatrain = quatrain.map((e, key) => {
    return <p className={"quatrain-text"}> {quatrain[key]} </p>;
  });

  return (
    <>
      <Header />
      <div className={"container"}>
        <div className={"quatrain-container"}>
          <div className={"quatrain"}>
            <div className={"verse-container"}>
              <h1 className={"quatrain-header-huge"}>{title}</h1>
              {mappedQuatrain}
            </div>
          </div>
          <button
            onClick={() => handleUpload(quatrain, title, author)}
            className={"custom-button"}
          >
            submit
          </button>
        </div>

        <WhatsappShareButton
          options={{
            buttonHashtag: undefined,
            screenName: undefined,
            size: "large",
            text: quatrain,
            via: "MCTW-TDW-MP2",
          }}
          url={
            title +
            "\n" +
            quatrain[0] +
            "\n" +
            quatrain[1] +
            "\n" +
            quatrain[2] +
            "\n" +
            quatrain[3] +
            "\n" +
            " -idiot quatrain "
          }
        >
          <WhatsappIcon
            size={30}
            round={true}
            bgStyle={{
              stroke: "transparent",
              strokeWidth: 0,
              fill: "none",
              hover: { fill: "#e5e5e5" },
            }}
          />
        </WhatsappShareButton>
      </div>
    </>
  );
};

export default Submit;
