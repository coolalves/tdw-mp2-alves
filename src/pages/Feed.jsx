import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
//import { Link } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import "./pageStyles/Feed.scss";
//import { WhatsappShareButton, WhatsappIcon } from "react-share";
//import { handleUpload } from "../firebase/firebase.js";
import { colRef } from "../firebase/firebase.js";
import { getDocs } from "firebase/firestore";



const Feed = () => {

    const data = [];
    const [quatrains, setQuatrains] = useState([]);

    useEffect(() => {
        getDocs(colRef)
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    data.push({ ...doc.data(), id: doc.id });
                });
                setQuatrains(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [quatrains])



    //setContent(quatrains);

   // console.log(quatrains[0].quatrain);

    // console.log(quatrains[0].quatrain)

    const feedContent = quatrains.map((e, key) => {
    return (
        <>
            <div className={"container"}>
                <div className={"quatrain-container"}>
                    <div className={"quatrain"}>
                        <div className={"verse-container"}>
                            <h1 className={"quatrain-header-huge"}>{quatrains[key].title}</h1>
                            {quatrains[key].quatrain.map((verse, index) => {
                                return <p className={"quatrain-text"} key={index}>{verse}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});


    return (
        <>
            <Header />
            {feedContent}
        </>
    );
};

export default Feed;
