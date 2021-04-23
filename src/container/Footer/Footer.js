import React from "react";
import { images } from "../../constants";
import { Newsletter, FooterOverlay } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019</p>
        <p className="p__opensans">212-344-1230</p>
        <p className="p__opensans">212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans" style={{ textTransform: "none" }}>
          "The best way to find yourself is to lose yourself in the service of
          others"
        </p>
        <img src={images.spoon} className="spoon__img" alt="spoon" />
        <div className="app__footer-links_icons">
          <a href="https://facebook.com">
            <FiFacebook fontSize={24} />
          </a>
          <a href="https://twitter.com">
            <FiTwitter fontSize={24} />
          </a>
          <a href="https://instagram.com">
            <FiInstagram fontSize={24} />
          </a>
        </div>
      </div>
      <div className="app__footer-links_hours">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <div style={{ marginBlock: "1rem" }}>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">8:00 am - 12:00 am</p>
        </div>
        <div>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans">7:00 am - 11:00 pm</p>
        </div>
      </div>
    </div>
    <div className="app__footer_copyright">
      <p className="p__opensans">Copyright Gericht. 2021</p>
    </div>
  </div>
);

export default Footer;
