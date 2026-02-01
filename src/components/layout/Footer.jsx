import {
    faInstagram, faLinkedin,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import "./footer.css";
import logoWhiteImage from "./assets/logo-white.png";

const contacts = [
  { icon: faLocationDot, info: "Kladno, Czech Republic", link: "https://www.google.com/maps/search/?api=1&query=Kladno,+Czech+Republic" },
  { icon: faPhone, info: "+420 736 548 700", link: "tel:+420736548700" },
  { icon: faEnvelope, info: "skapik7@gmail.com", link: "mailto:skapik7@gmail.com"  },
];

const socials = [
    {icon: faLinkedin, name: "linkedin", url: "https://www.linkedin.com/in/rostyslav-honcharov"},
    { icon: faInstagram, name: "instagram", url: "https://www.instagram.com/go_rostislav/profilecard/?igsh=MWd5czR5NjY0ZHRobA==" },
    { icon: faTiktok, name: "tiktok", url: "https://www.tiktok.com/@codecraftstricks" },
];

const Footer = ({ navLinks }) => {
  return (
    <footer className="site-footer">
      <img
        className="site-footer-logo"
        src={logoWhiteImage}
        alt="Rostyslav Honcharov logo"
      />
      <nav className="site-footer-nav">
        <h4>Sitemap</h4>
        <ul>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <HashLink to={navLink.path}>{navLink.name}</HashLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-footer-contact">
        <h4>My contacts</h4>
        <address>
          {contacts.map((contact, index) => (
            <HashLink to={contact.link} key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </HashLink>
          ))}
        </address>
      </div>
      <div className="site-footer-social">
        <h4>Connect</h4>
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
