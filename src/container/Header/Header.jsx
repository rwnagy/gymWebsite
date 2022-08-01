import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="header wrapper section__padding" id="home">
    <div className="wrapper_info">
      <SubHeading title="Start your Fitness Journey" />
      <h1 className="header-h1">Start your Fitness Journey</h1>
      <p className="opensans" style={{ margin: '2rem 0' }}>Etiam tempus, sapien non pellentesque dictum, lectus arcu aliquet velit, vel tincidunt elit libero id orci. Nullam aliquam hendrerit purus, sed aliquet libero bibendum sed. Curabitur purus ante, aliquet eu nisi sed, fringilla semper neque. In commodo a erat eget aliquet. Nam dictum nisl dui, in molestie justo finibus id. Sed congue vestibulum ligula, vitae congue ante imperdiet vitae. Proin lobortis est vitae tempus ullamcorper.  </p>
      <button type="button" className="custom__button">Choose a Plan</button>
    </div>

    <div className="wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
