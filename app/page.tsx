import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function Homepage() {
  // fetch the news data

  const news: NewsResponse = await fetchNews(categories.join(','))
  return (
    <div>
      {/* NewsList news */}
    </div>
  )
}

export default Homepage

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=dd87a769a1f97189656e23591906a791"

// type Article {
//   author: String
//   category: String
//   country: String
//   description: String
//   image: String
//   language: String
//   published_at: DateTime
//   source: String
//   title: String
//   url: String
// }
// type Pagination {
//   count: Int 
//   limit: Int
//   offset: Int
//   total: Int
// }
// type Root {
//   data: [Article]
//   pagination: Pagination
// }

// type Query {
//   myQuery(
//     access_key: String
//     countries: String
//     categories: String
//     limit: String
//     offset: String
//     sort: String
//     keywords: String
//     ): Root
//     @rest(endpoint: "http://api.mediastack.com/v1/news")
// }
