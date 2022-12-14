import React, { useEffect } from "react";
import "../components/FetchQuote/FetchQuote.scss";
import "../styles/App.scss";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { handleUpload } from "../firebase/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetQuatrain, saveQuatrain } from "../redux/quatrain";


const Submit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state.title;
  const quatrain = location.state.quatrain;
  const author = location.state.author;

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(saveQuatrain({ title, quatrain, author }))
  }, []);


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
              <p>{author}</p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              handleUpload(quatrain, title, author);
              dispatch(resetQuatrain());
              navigate("/feed");
            }}
            className={"other-button"}
          >
            submit
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className={"other-button"}
          >
            return
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
