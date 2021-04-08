import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor"></SubHeading>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans">
        Enjoy our professional grade dining experience cooked by professional,
        5-star chefs cooked to perfection. Your experience is our top priority.
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header food img" />
    </div>
  </div>
);

export default Header;
