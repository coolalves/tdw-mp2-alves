import lettering from "../../assets/lettering.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className={"header"}>
      <img className={"lettering"} src={lettering} alt="logo" />
    </div>
  );
};

export default Header;
