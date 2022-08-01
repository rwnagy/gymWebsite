import React from 'react';

import './Prices.css';

const Prices = ({ title, price, tags }) => (
  <div className="menuitem">
    <div className="prices-head">
      <div className="prices-name">
        <p className="cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="prices-dash" />
      <div className="prices-price">
        <p className="cormorant">{price}</p>
      </div>
    </div>

    <div className="prices-sub">
      <p className="opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default Prices;
