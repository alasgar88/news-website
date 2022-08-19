import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading, NewsList, Header } from "../components";
import { getData } from "../features/news/newsSlice";
import { setCategoryName } from "../features/category/categorySlice";

const Category = () => {
  const { isLoading } = useSelector((store) => store.news);
  const { categoryName } = useSelector((store) => store.category);
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(category));
    dispatch(setCategoryName(category));
  }, [category, categoryName, dispatch]);
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

export default Category;
