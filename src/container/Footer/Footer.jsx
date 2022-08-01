import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Trial } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="footer section__padding" id="login">
    <FooterOverlay />
    <Trial />

    <div className="footer-links">
      <div className="footer-links_contact">
        <h1 className="footer-headtext">Contact Us</h1>
        <p className="opensans">2422 Fincham Road, San Diego, California, 92121</p>
        <p className="opensans">+1 999-999-9999</p>
        <p className="opensans">+1 999-999-9999</p>
      </div>

      <div className="footer-links_logo">
        <img src={images.gymworld} alt="footer_logo" />
        <p className="opensans">&quot; Etiam tempus, sapien non pellentesque dictum, lectus arcu aliquet velit, vel tincidunt elit libero id orci.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="footer-links_work">
        <h1 className="footer-headtext">Working Hours</h1>
        <p className="opensans">Monday-Friday:</p>
        <p className="opensans">08:00 am - 12:00 am</p>
        <p className="opensans">Saturday-Sunday:</p>
        <p className="opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="opensans">2022 Gym World. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
