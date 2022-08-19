import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/not-found.png";

const Error = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div className='error-page'>
      <div className='image-container'>
        <img src={image} alt='' className='image' />
      </div>
      <button className='error-btn' type='button' onClick={backHome}>
        Back Home
      </button>
    </div>
  );
};

export default Error;
