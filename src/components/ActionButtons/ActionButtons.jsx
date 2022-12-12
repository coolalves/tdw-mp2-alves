import React, { useState, useEffect } from "react";
import "./ActionButtons.scss";
import "../../styles/App.scss";
import { TwitterShareButton, TwitterIcon } from "react-share";

const ActionButtons = (props) => {
  let data = props;
  const [pickedQuote, setPickedQuote] = useState("");

  const handleButtonClick = () => {
    setPickedQuote(data);
  };

  useEffect(() => {
    console.log(pickedQuote.props);
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
            text: data,
            via: "MCTW-TDW-MP2",
          }}
          url={data.props + " -idiot verse "}
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
