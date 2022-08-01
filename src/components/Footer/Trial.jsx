import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Trial.css';

const Trial = () => (
  <div className="trial">
    <div className="trial-heading">
      <SubHeading title="Trial Training" />
      <h1 className="headtext__cormorant">Contact Us for a Free Trial</h1>
      <p className="p__opensans">Try our Gym for 7 days for Free!</p>
    </div>
    <div className="trial-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Submit</button>
    </div>
  </div>
);

export default Trial;
