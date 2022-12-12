import React, { useState, useEffect } from "react";
import "./ActionButtons.scss";
import "../../styles/App.scss";
import { useNavigate } from "react-router-dom";

const ActionButtons = (props) => {
  const Navigate = useNavigate();
  //const title = props.title;
  //const quatrain = props.quatrain;
  const [pickedQuote, setPickedQuote] = useState("");
  const [pickedTitle, setPickedTitle] = useState("");

  const handleButtonClick = () => {
    const data = [pickedTitle, pickedQuote];
    //console.log(data);
    Navigate("/submit", {
      replace: true,
      state: { title: data[0], quatrain: data[1] },
    });
  };

  //console.log(title, quatrain);

  useEffect(() => {
    setPickedTitle(props.title);
  }, [props.title]);

  useEffect(() => {
    setPickedQuote(props.quatrain);
  }, [props.quatrain]);

  return (
    <>
      <div className={"buttons"}>
        <button onClick={handleButtonClick} className={"custom-button"}>
          submit
        </button>
      </div>
      <div className={"buttons"}></div>
    </>
  );
};

export default ActionButtons;
