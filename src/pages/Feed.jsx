import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "./pageStyles/Feed.scss";
import { colRef } from "../firebase/firebase.js";
import { getDocs } from "firebase/firestore";
import Nav from ".././components/Nav/Nav";


const Feed = () => {
    const [quatrains, setQuatrains] = useState([]);

    useEffect(() => {
        getDocs(colRef)
            .then((snapshot) => {
                // cria um array de quatrain objects desde o snapshot
                const quatrainsArray = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));

                // atualiza o estado das quatrains com o array de quatrains
                setQuatrains(quatrainsArray);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    const feedContent = quatrains.map((quatrain) => {
        const date = quatrain.timestamp.toDate().toLocaleString();
        return (
            <div key={quatrain.id} className={"container"}>
                <div className={"quatrain-container"}>
                    <div className={"quatrain"}>
                        <div className={"verse-container"}>
                            <h1 className={"quatrain-header-huge"}>{quatrain.title}</h1>
                            {quatrain.quatrain.map((verse, index) => {
                                return <p className={"quatrain-text"} key={index}>{verse}</p>
                            })}
                            <p>{quatrain.author}</p>
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
            <Nav linkA={"about"} linkB={""} />
            {feedContent}

        </>
    );
};

export default Feed;
