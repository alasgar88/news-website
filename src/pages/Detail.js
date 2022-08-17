import React from "react";
import { Header, SingleNewsDetail } from "../components";
import { Loading } from "../components";
import { useSelector } from "react-redux";

const Detail = () => {
  return (
    <div className='detail'>
      <Header />
      <SingleNewsDetail />
    </div>
  );
};

export default Detail;
