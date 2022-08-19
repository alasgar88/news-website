import React from "react";
import categoryList from "../utils/category";
import { setCategoryName } from "../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/utils";

const NewsCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((store) => store.news);
  const { categoryName } = useSelector((store) => store.category);
  const { category } = useParams();
  const categoryUrl = category;

  return (
    <div className='category-list'>
      {categoryList.map((category) => {
        return (
          <button
            disabled={
              category.name === categoryName
                ? false
                : category.name === categoryUrl
                ? false
                : isLoading
            }
            key={category.id}
            onClick={(e) => {
              e.preventDefault();
              dispatch(setCategoryName(category.name));
              const navigateUrl =
                category.name === "all" ? "/" : `/${category.name}`;
              navigate(navigateUrl);
            }}
            className={`${
              category.name === categoryName
                ? "category-button link-active"
                : category.name === categoryUrl
                ? "category-button link-active"
                : "category-button"
            }`}
          >
            <h3 className='category-name'>
              {capitalizeFirstLetter(category.name)}
            </h3>
          </button>
        );
      })}
    </div>
  );
};

export default NewsCategory;
