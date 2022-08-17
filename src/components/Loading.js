import React from "react";
import { useSelector } from "react-redux";
import { Header } from "./";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  const { categoryName } = useSelector((state) => state.category);
  return (
    <div className='loading'>
      <Header />
      <div className='loading-info'>
        <div className='loading-circle'>
          <AiOutlineLoading3Quarters />
        </div>
        <div className='loading-category'>
          Loading {`"${categoryName.toUpperCase()}"`} news
        </div>
      </div>
    </div>
  );
};

export default Loading;
