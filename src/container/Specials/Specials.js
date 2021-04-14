import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./Specials.css";

const Specials = () => (
  <div className="app__specials flex__center section__padding" id="specials">
    <div className="app__specials-title">
      <SubHeading title="Menu That Fits Your Pallette"></SubHeading>
      <h1 className="headtext__cormorant">Todays Specials</h1>
    </div>
    <div className="app__specials-menu">
      <div className="app__specials-menu_wine flex__center">
        <p className="app__specials-menu_heading">Wine & Beer</p>
        <div className="app__specials-menu_items">
          {data.wines.map((item, i) => {
            return (
              <MenuItem
                key={i}
                title={item.title}
                price={item.price}
                tags={item.tags}
              ></MenuItem>
            );
          })}
        </div>
      </div>
      <div className="app__specials-menu_img">
        <img src={images.menu} alt="menu" />
      </div>
      <div className="app__specials-menu_cocktails flex__center">
        <p className="app__specials-menu_heading">Cocktails</p>
        <div className="app__specials-menu_items">
          {data.cocktails.map((item, i) => {
            return (
              <MenuItem
                key={i}
                title={item.title}
                price={item.price}
                tags={item.tags}
              ></MenuItem>
            );
          })}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "1rem" }}>
      <button className="custom__button">Learn More</button>
    </div>
  </div>
);

export default Specials;
