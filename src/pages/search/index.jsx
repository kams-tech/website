import React from "react"
import { Search, executeSearch } from "../../components/search"

export default function SearchPage({ serverData }) {
    return (
        <Search 
            initialData={serverData.data} 
            q={serverData.query?.q} />
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