import React from "react";
import { Header } from "./";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Loading = () => {
  const { category } = useParams();
  const categoryName = !category ? "all" : category;
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
