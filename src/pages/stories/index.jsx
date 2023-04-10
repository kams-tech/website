import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ArticleSearch } from "../../components/ArticleSearch"
import { searchArticles } from "../../services/data"

const queryClient = new QueryClient()

export default function Articles({ serverData }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ArticleSearch initialData={serverData.initialData} />
        </QueryClientProvider>
    )
}

export async function getServerData(context) {

console.log("context", context)

    const query = context.query || {}

    const data = await searchArticles(query)

    return {
        props: {
            query,
            initialData: data
        }
    }
}