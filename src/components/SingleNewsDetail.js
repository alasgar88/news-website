// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { BsClock } from "react-icons/bs";
// import { HiOutlineUser } from "react-icons/hi";
// import { useParams } from "react-router-dom";
// import { getData } from "../features/news/newsSlice";
// import { useState } from "react";
// import {
//   addNewsToLocalStorage,
//   getNewsFromLocalStorage,
// } from "../utils/localStorage";

// const SingleNewsDetail = () => {
//   const { newsId } = useParams(null);
//   let allNews = useSelector((store) => store.news).data;
//   var data = allNews.find((news) => news.id === newsId);
//   if (data) {
//     addNewsToLocalStorage(data);
//   } else {
//     var data = getNewsFromLocalStorage();
//   }

//   return (
//     <div className='news-detail'>
//       <div className='detail-image-container'>
//         <img src={data?.imageUrl} alt='' className='detail-image' />
//       </div>
//       <div className='detail-info'>
//         <div className='detail-heading'>{data?.title}</div>
//         <div className='detail-seperator'></div>
//         <div className='detail-content'>{data?.content}</div>
//       </div>
//       <div className='detail-additional-info'>
//         <span className='time-icon'>
//           <BsClock />
//         </span>
//         <span className='time'>{data?.date?.split(",")[0]}</span>
//         <span className='profile-icon'>
//           <HiOutlineUser />
//         </span>
//         <span className='profile'>{data?.author}</span>
//       </div>
//     </div>
//   );
// };

// export default SingleNewsDetail;
