import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json"
import sortNewsByImage from "../lib/sortNewsByImage";

async function Homepage() {
  // fetch the news data
  const news: NewsResponse = sortNewsByImage(response) || (await fetchNews(categories.join(',')));

  
  return (
    <div>
      <NewsList
        news={news}
      />
    </div>
  )
}

export default Homepage



