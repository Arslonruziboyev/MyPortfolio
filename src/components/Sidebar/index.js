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
import { FaEnvelope, FaGithub, FaHome, FaLinkedin, FaSkype, FaUser, FaYoutube } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Subtitle Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FaHome color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FaUser color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FaEnvelope color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="no web">
                <FaLinkedin color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="no web">
                <FaGithub color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="no web">
                <FaYoutube color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="no web">
                <FaSkype color="#4d4d4e" />
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
