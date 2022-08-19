import { Header, SingleNewsDetail, SimilarNewsList } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryName } from "../features/category/categorySlice";

import { useParams } from "react-router-dom";

const Detail = () => {
  let { data } = useSelector((store) => store.news);
  const { category } = useParams();
  const dispatch = useDispatch();
  dispatch(setCategoryName(category));

  return (
    <div className='detail'>
      <Header />
      <SingleNewsDetail data={data} />
      <SimilarNewsList data={data} />
    </div>
  );
};

export default Detail;
