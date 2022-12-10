export default function sortNewsByImage(news: NewsResponse) {
    // console.log(`NEWS DATA IS OF TYPE ${typeof(news.data.myQuery.data)}`);
    // console.log(`AND asdISSS: ${(news.data.myQuery.data)}`);
    const newsWithImage = news.data.filter((item) => item.image !== null);
    const newsWithoutImage = news.data.filter((item) => item.image === null);

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImage, ...newsWithoutImage],
    }

    return sortedNewsResponse;
}