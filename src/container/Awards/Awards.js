import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Awards.css";

const AwardCard = ({ imgUrl, title, subtitle }) => (
  <div className="app__awards-card">
    <img src={imgUrl} alt="" />
    <div className="app__awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Awards = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards and Recognition" />
      <h1 className="headtext__cormorant">Our Awards</h1>
      <div className="app__awards">
        {data.awards.map((award) => {
          return <AwardCard {...award} key={award.title} />;
        })}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.awards} alt="awards" />
    </div>
  </div>
);

export default Awards;
