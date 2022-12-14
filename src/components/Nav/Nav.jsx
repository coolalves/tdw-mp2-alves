
import "./Nav.scss";
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
    const linkA = props.linkA;
    const linkB = props.linkB;
    const navigate = useNavigate();
    let linkBName = "";
    if (linkB != "") {
        linkBName = linkB
    } else {
        linkBName = "home"
    }

    return (
        <div className={"nav"}>
            <button
                onClick={() => {
                    navigate("/" + linkA);
                }}
            >
                <p>{linkA}</p>
            </button>
            <button
                onClick={() => {
                    navigate("/" + linkB);
                }}
            >
                <p>{linkBName}</p>
            </button>

        </div>
    );
};

export default Nav;
