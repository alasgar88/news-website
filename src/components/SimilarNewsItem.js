import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsClock } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";

const SimilarNewsItem = ({ newId, title, date, imageUrl, author, id }) => {
  const navigate = useNavigate();
  const { category } = useParams(null);
  const handleClick = (newId) => {
    navigate(`/${category}/${newId}`);
  };
  return (
    <div
      className='similar-news-item'
      key={id}
      onClick={() => handleClick(newId)}
    >
      <img src={imageUrl} alt='' className='similar-news-image' />
      <div className='image-cover'></div>
      <div className='similar-news-item-heading'>{title}</div>
      <div className='detail-additional-info similar'>
        <span className='time-icon tp-icon'>
          <BsClock />
        </span>
        <span className='time tp'>{date.split(",")[0]}</span>
        <span className='profile-icon tp-icon'>
          <HiOutlineUser />
        </span>
        <span className='profile tp'>{author}</span>
      </div>
    </div>
  );
};

export default SimilarNewsItem;
