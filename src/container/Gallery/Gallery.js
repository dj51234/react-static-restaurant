import { React, useState, useRef } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];
  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          pariatur totam assumenda quasi quisquam explicabo, commodi vitae
          inventore architecto eum.
        </p>
        <button className="custom__button" style={{ marginTop: "2rem" }}>
          See More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((img, i) => {
            return (
              <div
                className="app__gallery-images_card flex__center"
                key={i + 1}
              >
                <img src={img} alt="Gallery Image" />
                <BsInstagram className="gallery__image-icon instagram-icon" />
              </div>
            );
          })}
        </div>
        <div className="app__gallery-images_controls">
          <BsArrowLeftShort
            onClick={() => {
              scroll("left");
            }}
            className="gallery__arrow-icon"
          />
          <BsArrowRightShort
            onClick={() => {
              scroll("right");
            }}
            className="gallery__arrow-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
