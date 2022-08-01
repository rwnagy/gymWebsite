import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="laurels_awards-card_content">
      <p className="cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="bg wrapper section__padding" id="awards">
    <div className="wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
