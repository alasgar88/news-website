import React from "react";
import categoryList from "../utils/category";
import { getData } from "../features/news/newsSlice";
import { setCategoryName } from "../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewsCategory = () => {
  const { categoryName } = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='category-list'>
      {categoryList.map((category) => {
        return (
          <button
            key={category.id}
            onClick={(e) => {
              e.preventDefault();
              dispatch(setCategoryName(category.name));
              dispatch(getData(category.name));
              navigate("/");
            }}
            className={`${
              category.name === categoryName
                ? "category-button link-active"
                : "category-button"
            }`}
          >
            <h3 className='category-name'>{category.name}</h3>
          </button>
        );
      })}
    </div>
  );
};

export default NewsCategory;
