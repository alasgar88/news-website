export const paginate = (news) => {
  const itemsPerPage = 6;
  const page = Math.ceil(news.length / itemsPerPage);
  const splitNews = Array.from({ length: page }, (_, index) => {
    const start = index * itemsPerPage;
    return news.slice(start, start + itemsPerPage);
  });

  return splitNews;
};
