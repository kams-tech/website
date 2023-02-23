import { useQuery } from "./useQuery";

export function useArticleQuery(options = {}) {
    const variables = {
        ...defaultVariables
    };
    const queryBody = toBody({ query, variables })

    const [ response, errors ] = useQuery(queryBody)

    const items = response?.articleCollection?.items

    return [items, errors]
}

const query = `query GetArticles($limit: Int!) {
    articleCollection(limit: $limit) {
        items {
            title
            slug,
            subtitle
        }
    }
}`;

const defaultVariables = {
    limit: 1
}

const toBody = (obj) => JSON.stringify(obj)