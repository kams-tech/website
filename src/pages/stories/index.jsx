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
    const filter = context.query?.filter || []

    const data = await searchArticles()

    return {
        props: {
            filter,
            initialData: data
        }
    }
}