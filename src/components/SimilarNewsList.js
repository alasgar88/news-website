import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getNewsFromLocalStorage } from "../utils/localStorage";
import { SimilarNewsItem } from "./";
import { FcPrevious, FcNext } from "react-icons/fc";

const SimilarNewsList = () => {
  let { data } = useSelector((store) => store.news);
  const [count, setCount] = useState(0, 3);
  if (data.length === 0) {
    data = getNewsFromLocalStorage("newsData");
  }
  const similar = data.slice(count, count + 3);

  const scrollTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 60, left: 0, behavior: "smooth" });
    }, 400);
  };

  const prevSlide = () => {
    setCount((oldValue) => {
      if (oldValue - 3 < 0) {
        oldValue = data.length - 3;
      } else {
        oldValue = oldValue - 3;
      }
      console.log(oldValue, data.length);
      return oldValue;
    });
  };
  const nextSlide = () => {
    setCount((oldValue) => {
      if (oldValue + 3 >= data.length) {
        oldValue = 0;
      } else {
        oldValue = oldValue + 3;
      }
      console.log(oldValue, data.length);
      return oldValue;
    });
  };
  return (
    <>
      <div className='similar-news-list' onClick={scrollTop}>
        <div className='similar-heading'>Similar News</div>
        <div className='similar-news-container'>
          {similar.map((news) => (
            <SimilarNewsItem {...news} key={news.id} />
          ))}
        </div>
      </div>
      <div className='navigation-button-container'>
        <div className='prev-button' onClick={prevSlide}>
          <FcPrevious />
        </div>
        <div className='next-button' onClick={nextSlide}>
          <FcNext />
        </div>
      </div>
    </>
  );
};

export default SimilarNewsList;
