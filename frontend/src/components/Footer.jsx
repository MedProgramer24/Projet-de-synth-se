import { LocalPhone, Email, Facebook, Instagram, Twitter } from "@mui/icons-material";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/" className="footer_logo">
          <h1 className="footer_logo_text">CV Maker Pro</h1>
        </a>
        <div className="footer_socials">
          <a href="/" className="footer_social_icon" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="/" className="footer_social_icon" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="/" className="footer_social_icon" aria-label="Twitter">
            <Twitter />
          </a>
        </div>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>
            <a href="/Terms" >Terms & Conditions</a>
            </li>
          <li>
            <a href="/Faq" >FAQ</a>
          </li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_contact_info">
          <LocalPhone />
          <p>+1 234 567 890</p>
        </div>
        <div className="footer_contact_info">
          <Email />
          <p>HospitalityShop@support.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
