import React from "react";
import Header from "../components/Header/Header";
import "./pageStyles/Feed.scss";
import Nav from ".././components/Nav/Nav";



const About = () => {
    return (
        <>
            <Header />
            <Nav linkA={"feed"} linkB={""} />
            <div className={"container"}>
                <div className={"quatrain-container"}>
                    <div className={"quatrain"}>
                        <div className={"verse-container"}>
                            <h1 className={"quatrain-header-huge"}> about </h1>
                            <p>The purpose of this website is to fulfill the M2A mini-project proposed in the TDW course. The challenge consisted of developing a React front-end application to consume and display information from any public data source.</p>

                            <p>To achieve this, the selected data source was the kanye.rest API, with the help of the Axios library. Every time a request is made, this API returns a quote by American singer and songwriter Kanye West, who in recent years has gained a reputation for being inflammatory and controversial, often making public statements that are considered offensive or polarizing. The chosen theme aims to demonstrate the inflammatory nature of Kanye West's words in a fun and engaging way.</p>

                            <p>On the home page, it is possible to make a GET request with Axios, which returns four random quotes by the author. This information is then displayed on the screen in a visually appealing way, using ReactJS components that respect their design principles and managed using the hooks of this library. The user can then change the "verses" created for new quotes, making new GET requests. This process can be repeated multiple times until the user is satisfied with the outcome. The resulting quote can be subsequently submitted to Firestore to be displayed in the feed component, which shows all the quotes created in the application.</p>

                            <p>In summary, this project aims to demonstrate the power of ReactJS and its hooks, as well as the integration with other tools, while providing a satirical view of the often polarizing figure of Kanye West.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
