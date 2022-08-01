import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="aboutus bg flex__center section__padding" id="about">
    <div className="aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="aboutus-content flex__center">
      <div className="aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.barbell} alt="about_barbell" className="barbell__img" />
        <p className="opensans">Donec tincidunt est vitae ipsum tristique, a viverra tellus ultrices. Quisque vulputate tortor sit amet consectetur maximus. Nullam ut felis sapien. Pellentesque consectetur, lectus eu mollis dictum, sem nunc scelerisque velit, ac pharetra quam ligula consequat est.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="aboutus-content_knife flex__center">
        { /* <img src={images.dumbbell} alt="about_knife" />  */}
      </div>

      <div className="aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.barbell} alt="about_barbell" className="barbell__img" />
        <p className="opensans">Aliquam suscipit pellentesque libero, non aliquam magna auctor id. Donec mattis, libero eget finibus tempor, sem erat sagittis nulla, quis lacinia libero ipsum eget mi. Sed lacinia hendrerit dolor, in euismod diam mattis sit amet. Ut pulvinar est nec maximus molestie. </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
