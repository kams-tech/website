import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { EntrySearch } from "../../components/EntrySearch"
import { search } from "../../services"

const queryClient = new QueryClient()

export default function Search({ serverData }) {
    return (
        <QueryClientProvider client={queryClient}>
            <EntrySearch initialData={serverData.initialData} query={serverData.query?.q}/>
        </QueryClientProvider>
    )
}

export async function getServerData(context) {
    
    const query = context.query || {}
    const data = await search(query)

    return {
        props: {
            query,
            initialData: data
        }
    }
}