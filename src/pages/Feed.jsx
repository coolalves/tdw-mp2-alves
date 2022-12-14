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
    //const data = [];
    const [quatrains, setQuatrains] = useState([]);

    useEffect(() => {
        getDocs(colRef)
            .then((snapshot) => {
                // Create an array of quatrain objects from the snapshot
                const quatrainsArray = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));

                // Update the quatrains state with the array of quatrains
                setQuatrains(quatrainsArray);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    const feedContent = quatrains.map((e) => {
        const date = e.timestamp.toDate().toDateString()
        //console.log(date)
        return (
            <div key={e.id} className={"container"}>
                <div className={"quatrain-container"}>
                    <div className={"quatrain"}>
                        <div className={"verse-container"}>
                            <h1 className={"quatrain-header-huge"}>{e.title}</h1>
                            {e.quatrain.map((verse, index) => {
                                return <p className={"quatrain-text"} key={index}>{verse}</p>
                            })}
                            <p>{e.author}</p>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            </div>
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
