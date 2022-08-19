import React from "react";
import { useSelector } from "react-redux";
import { BsClock } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { useParams } from "react-router-dom";
import {
  getNewsFromLocalStorage,
} from "../utils/localStorage";

const SingleNewsDetail = () => {
  let { data } = useSelector((store) => store.news);
  const { newsId } = useParams(null);

  if (data.length === 0) {
    data = getNewsFromLocalStorage("newsData");
  }
 data = data.find((news) => parseInt(news.newId) === parseInt(newsId));
  return (
    <div className='news-detail'>
      <div className='detail-image-container'>
        <img src={data?.imageUrl} alt='' className='detail-image' />
      </div>
      <div className='detail-info'>
        <div className='detail-heading'>{data?.title}</div>
        <div className='detail-seperator'></div>
        <div className='detail-content'>{data?.content}</div>
      </div>
      <div className='detail-additional-info'>
        <span className='time-icon'>
          <BsClock />
        </span>
        <span className='time'>{data?.date?.split(",")[0]}</span>
        <span className='profile-icon'>
          <HiOutlineUser />
        </span>
        <span className='profile'>{data?.author}</span>
      </div>
    </div>
  );
};

export default SingleNewsDetail;
