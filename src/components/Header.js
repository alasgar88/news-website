import image from "../assets/image.png";
import React from "react";
import { NewsCategory } from ".";

const Header = () => {
  return (
    <>
      <div className='img-container'>
        <img src={image} alt='' className='image' />
        <div className='info-container'>
          <h1>News</h1>
          <NewsCategory />
        </div>
      </div>
    </>
  );
};

export default Header;
