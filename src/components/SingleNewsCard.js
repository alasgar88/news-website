import React from "react";
import { BsClock } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SingleNews = ({ title, imageUrl, date, content, author, id, newId }) => {
  const navigate = useNavigate();
  const { categoryName } = useSelector((store) => store.category);
  console.log(categoryName, "categoryName");
  const navigateUrl =
    categoryName === "all" ? `/all/${newId}` : `/${categoryName}/${newId}`;

  return (
    <div className='news-item' onClick={() => navigate(navigateUrl)}>
      <div className='news-image-container'>
        <img src={imageUrl} alt='' className='news-image' />
      </div>
      <div className='news-info-container'>
        <div className='news-title'>{title}</div>
        <div className='news-seperator'></div>
        <div className='news-content'>
          {content.slice(0, 335)}
          <span>...</span>
        </div>
        <div className='news-additional-info'>
          <span className='time-icon'>
            <BsClock />
          </span>
          <span className='time'>{date.split(",")[0]}</span>
          <span className='profile-icon'>
            <HiOutlineUser />
          </span>
          <span className='profile'>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
