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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            voluptates cumque pariatur itaque voluptatum error doloribus,
            officia autem ducimus labore repellat aut dolor temporibus
            distinctio nulla id accusamus esse laboriosam? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Accusamus, facilis.
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
