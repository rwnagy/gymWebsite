import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgGym } from 'react-icons/cg';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.gymworld} alt="logo" />
      </div>
      <ul className="navbar-links">
        <li className="opensans"><a href="#home">Home</a></li>
        <li className="opensans"><a href="#about">About</a></li>
        <li className="opensans"><a href="#prices">Prices</a></li>
        <li className="opensans"><a href="#awards">Awards</a></li>
        <li className="opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-login">
        <a href="#login" className="opensans">Log In / Sign Up</a>
        <div />
        <a href="/" className="opensans">Contact Us</a>
      </div>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            <CgGym fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#prices" onClick={() => setToggleMenu(false)}>Prices</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
