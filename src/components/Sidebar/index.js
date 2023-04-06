import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBitcoin,
  faChrome,
  faHouzz,
} from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope, FaHome, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Subtitle Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeClassName="active" to="/">
          <FaHome color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="about-link"
          to="/about"
        >
          <FaUser color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          <FaEnvelope color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
