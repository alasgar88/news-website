import React from "react";
import { useSelector } from "react-redux";
import { Loading, NewsList, Header } from "../components";

const Landing = () => {
  const { isLoading } = useSelector((store) => store.news);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='landing'>
      <Header />
      <NewsList />
    </div>
  );
};

export default Landing;
