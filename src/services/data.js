const searchArticles = async (searchParams) => {
    const query = { query: SEARCH_ARTICLES }
    const variables = {
        variables: {
            ...defaultSearchParams,
            ...searchParams
        }
    }

    const response = await executeQuery(query, variables)

    return response
}

const getPages = async () => {

    const query = { query: GET_PAGES }

    const response = await executeQuery(query)

    return response
}

const executeQuery = async (query, variables = {}) => {
    const response = await fetch(baseUrl, {
        ...defaultQueryOptions,
        body: toBody({ ...query, ...variables })
    })

    return await response.json()
}

const baseUrl = 'https://graphql.contentful.com/content/v1/spaces/y9029urma92g/';
const defaultQueryOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer Wv3JP4RxSTWpaGOYu-HRbiRyYlxIeFilnxlcH-arvko"
    }
}
const defaultSearchParams = {
    limit: 1
}
const SEARCH_ARTICLES = `query SearchArticles($limit: Int!) {
    articleCollection(limit: $limit) {
        items {
            title
            slug
            subtitle
            pageReferencesCollection {
                items {
                  title
                }
            }
        }
        total
        skip
        limit
    }
}`

const GET_PAGES = `query GetPages {
    pageCollection {
        items {
            title
            slug
            category {
                name
                slug
            }
            headline
            content {
                json
            }
            stageImage {
                url
                title
                description
                contentType
                size
                width
                height
            }
        }
    }
}`

const toBody = (obj) => JSON.stringify(obj)

module.exports.getPages = getPages
module.exports.searchArticles = searchArticles