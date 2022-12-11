import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean    
) => {
    const query = gql`
        query MyQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                categories: $categories
                countries: "gb"
                sort: "published_desc"
                keywords: $keywords
            ) {
                data {
                    author
                    category
                    country
                    description
                    image
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
            }
        }
    `;

    // Fetch function with NextJS 13 caching...
    const res = await fetch('https://jobabo.stepzen.net/api/original-ladybug/__graphql', {
        method: 'POST',
        cache: isDynamic ? 'no-cache' : 'default',
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            },
        }),
    });

    // console.log(`
    //     "LOADING NEW DATA FROM API for category >>> ",
    //     c: ${category},
    //     k: ${keywords}
    // `);

    const newsResponse = await res.json();

    const newsData = newsResponse.data.myQuery;

    // Sort by images vs not images present
    const news = sortNewsByImage(newsData);

    
    // Return news
    return news;
}

export default fetchNews;