import React, { useState, useEffect } from "react";
import "./ActionButtons.scss";
import "../../styles/App.scss";
import { TwitterShareButton, TwitterIcon } from "react-share";

const ActionButtons = (props) => {
  const title = props.title;
  const quatrain = props.quatrain;
  const [pickedQuote, setPickedQuote] = useState("");
  const [pickedTitle, setPickedTitle] = useState("");

  const handleButtonClick = () => {
    setPickedQuote(quatrain);
    setPickedTitle(title);
  };

  console.log(title, quatrain);

  useEffect(() => {
    console.log(pickedQuote);
  }, [pickedQuote]);

  return (
    <>
      <div className={"buttons"}>
        <button onClick={handleButtonClick} className={"custom-button"}>
          {" "}
          pick quatrain
        </button>
      </div>
      <div className={"buttons"}>
        <TwitterShareButton
          options={{
            buttonHashtag: undefined,
            screenName: undefined,
            size: "large",
            text: quatrain,
            via: "MCTW-TDW-MP2",
          }}
          url={quatrain + " -idiot verse "}
        >
          <TwitterIcon
            size={30}
            round={true}
            bgStyle={{
              stroke: "#e5e5e5",
              strokeWidth: 2,
              fill: "none",
              hover: { fill: "#e5e5e5" },
            }}
          />
        </TwitterShareButton>
      </div>
    </>
  );
};

export default ActionButtons;
