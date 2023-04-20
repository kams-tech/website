import React from "react"
import EntrySearch from "../../components/EntrySearch"
import { SearchContextProvider, executeSearch } from "../../components/search"

export default function SearchPage({ serverData }) {
    return (
        <SearchContextProvider initialData={serverData.data} q={serverData.query?.q} >
            <EntrySearch />
        </SearchContextProvider>
    )
}

export async function getServerData(context) {
    
    const query = context.query || {}
    const data = await executeSearch(query)

    return {
        props: {
            query,
            data
        }
    }
}