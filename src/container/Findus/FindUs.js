import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "2rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#dcca87", marginBlock: "2rem" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans" style={{ marginBlock: "1rem" }}>
          Mon-Fri 10:00 am - 2:00 am
        </p>
        <p className="p__opensans" style={{ marginBlock: "1rem" }}>
          Sat-Sun 10:00 am - 3:00 am
        </p>
      </div>
      <button className="custom__button" style={{ marginTop: "1rem" }}>
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus info" />
    </div>
  </div>
);

export default FindUs;
