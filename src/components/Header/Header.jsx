import lettering from "../../assets/lettering.svg";
import './Header.scss';

const Header = () => {

    return (
        <div className={"header"}>
            <img className={"lettering"} src={lettering} width={"10%"} alt="logo" />
        </div>
    );
}

export default Header;