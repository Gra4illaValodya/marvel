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
        <NavLink
          end
          style={({ isActive }) => ({
            color: isActive ? "#913002" : "inherit",
          })}
          to="/"
        >
          Characters
        </NavLink>{" "}
        /{" "}
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#913002" : "inherit",
          })}
          to="/comics"
        >
          Comics
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
