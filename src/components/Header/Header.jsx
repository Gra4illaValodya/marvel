import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <span className="Header__logo-item">
          <Link to="/">Marvel information portal</Link>
        </span>
      </div>
      <div className="Header__nav">
        <NavLink exact activeStyle={{ color: "#913002" }} to="/">
          Characters
        </NavLink>{" "}
        /{" "}
        <NavLink exact activeStyle={{ color: "#913002" }} to="/comics">
          Comics
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
