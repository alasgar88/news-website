import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SingleNewsCard } from ".";

const NewsList = () => {
  const { data, isLoading } = useSelector((store) => store.news);
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(0);

  const handleClick = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const scrollTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 60, left: 0, behavior: "smooth" });
    }, 500);
  };

  useEffect(() => {
    if (isLoading) return;
    setNewsData(data[page]);
  }, [isLoading, page, data]);
  return (
    <>
      <div className='news-list'>
        {newsData.map((item) => {
          return <SingleNewsCard {...item} key={item?.id} />;
        })}
      </div>
      <div className='footer'>
        <div className='pagination'>
          <button
            className='prev'
            onClick={() => {
              prevPage();
              scrollTop();
            }}
          >
            Prev
          </button>
          {data.map((_, index) => {
            return (
              <button
                key={index}
                className={`paginate-button ${
                  index === page && "paginate-active"
                }`}
                onClick={() => {
                  handleClick(index);
                  scrollTop();
                }}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            className='next'
            onClick={() => {
              nextPage();
              scrollTop();
            }}
          >
            Prev
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsList;
