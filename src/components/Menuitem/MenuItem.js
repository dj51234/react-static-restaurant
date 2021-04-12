import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menu-item">
    <div className="app__menu-item-head">
      <div className="app__menu-item-name">
        <p className="p__cormorant" style={{ color: "#dcca87" }}>
          {title}
        </p>
      </div>
      <div className="app__menu-item-separator"></div>
      <div className="app__menu-item-price">
        <p className="p__cormorant">{price}</p>
      </div>
      <div className="app__menu-item-tags">
        <p className="p__opensans" style={{ color: "#aaa" }}>
          {tags}
        </p>
      </div>
    </div>
  </div>
);

export default MenuItem;
