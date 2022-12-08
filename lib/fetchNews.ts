const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean    
) => {
    // GraphQL query
    const GET_QUERY = gql`
  query MyQuery   {
    myQuery(access_key: "dd87a769a1f97189656e23591906a791") {
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

    // Sort by images vs not images present

    // Return response
}

export default fetchNews;