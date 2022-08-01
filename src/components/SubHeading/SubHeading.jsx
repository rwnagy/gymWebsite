import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="cormorant">{title}</p>
    <img src={images.barbell} alt="barbell_image" className="barbell__img" />
  </div>
);

export default SubHeading;
