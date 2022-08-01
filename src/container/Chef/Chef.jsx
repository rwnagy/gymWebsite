import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="bg wrapper section__padding">
    <div className="wrapper_img wrapper_img-reverse">
      <img src={images.owner} alt="chef_image" />
    </div>
    <div className="wrapper_info">
      <SubHeading title="Founder's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="chef-content">
        <div className="chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="opensans">Nam ultricies nulla lacus, ac finibus est consequat id. Suspendisse venenatis purus vitae feugiat luctus.</p>
        </div>
        <p className="opensans"> Maecenas sed malesuada sem. Nulla facilisi. Fusce convallis velit a nisi convallis, eu accumsan orci fermentum. Maecenas non diam quis diam volutpat auctor rhoncus ac nibh. Fusce massa nunc, scelerisque non nisi ac, imperdiet gravida ligula. Suspendisse in sapien sit amet ligula semper dignissim vitae sed erat. Integer est sem, laoreet sed accumsan hendrerit, suscipit id magna.  </p>
      </div>

      <div className="chef-sign">
        <p>Kevin Levrone</p>
        <p className="opensans">Owner & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
