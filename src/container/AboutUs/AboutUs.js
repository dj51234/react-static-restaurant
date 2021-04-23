import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="aboutus"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="aboutus background" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Gericht is excited to announce its' transition to America with our
          first restaurant in New York, the melting pot of the United States.
          Everyone from all backgrounds are welcome to try our professionally
          acclaimed cuisine.
        </p>
        <button className="custom__button">Learn More</button>
      </div>
      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          We are a new restaurant derived from German origins. Our food is
          largely based on German traditions but we have a little bit of
          everything for eveeryone. Enjoy the finest cuisine in NY today.
        </p>
        <button className="custom__button">Learn More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
