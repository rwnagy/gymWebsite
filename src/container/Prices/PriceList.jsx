import React from 'react';

import { SubHeading, Prices } from '../../components';
import { data, images } from '../../constants';
import './PriceList.css';

const PriceList = () => (
  <div className="priceList flex__center section__padding" id="prices">
    <div className="priceList-title">
      <SubHeading title="Sign Up Today" />
      <h1 className="headtext__cormorant">Our Prices</h1>
    </div>

    <div className="priceList-menu">
      <div className="priceList-memberships  flex__center">
        <p className="priceList-heading">Memberships</p>
        <div className="priceList_items">
          {data.memberships.map((membership, index) => (
            <Prices key={membership.title + index} title={membership.title} price={membership.price} tags={membership.tags} />
          ))}
        </div>
      </div>

      <div className="priceList-img">
        <img src={images.prices} alt="_img" />
      </div>

      <div className="priceList-classes  flex__center">
        <p className="priceList-heading">Classes</p>
        <div className="priceList_items">
          {data.groupClasses.map((groupClass, index) => (
            <Prices key={groupClass.title + index} title={groupClass.title} price={groupClass.price} tags={groupClass.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default PriceList;
