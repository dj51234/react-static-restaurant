import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Corner" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="chef quote" />
          <p className="p__opensans">
            My family migrated to Europe in the early 1990's where I was
            introduced to a plethora of new foods that I'd never even heard of.
            I became interested in creating and making food that was unique and
            delicious at that time and never looked back. I started this
            restaurant in Germany and am so excited for our new adventure
            abroad.
          </p>
        </div>
      </div>
      <div className="app__chef-signature">
        <p className="app__chef-signature-title">Kevin Luo</p>
        <p className="p__opensans">Founder & Chef</p>
        <img src={images.signature} alt="chef signature" />
      </div>
    </div>
  </div>
);

export default Chef;
