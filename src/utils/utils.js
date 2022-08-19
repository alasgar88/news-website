export const paginate = (news) => {
  const itemsPerPage = 6;
  const page = Math.ceil(news.length / itemsPerPage);
  const splitNews = Array.from({ length: page }, (_, index) => {
    const start = index * itemsPerPage;
    return news.slice(start, start + itemsPerPage);
  });

  return splitNews;
};

export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const setNewId = (news) => {
  var myData = news.map((item, index) => {
    return { ...item, newId: index + 100 };
  });
  return myData;
};
