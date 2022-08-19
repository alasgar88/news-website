export const addNewsToLocalStorage = (type, news) => {
  localStorage.setItem(type, JSON.stringify(news));
};

export const getNewsFromLocalStorage = (type) => {
  const result = localStorage.getItem(type);
  const news = result ? JSON.parse(result) : null;
  return news;
};
