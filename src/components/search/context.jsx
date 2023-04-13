import React, { createContext, useState, useContext } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const SearchContext = createContext({
    queryClient: new QueryClient()
})

const SearchContextProvider = ({ q = "", initialData = [], children }) => {
    const [state, setState] = useState({q, initialData})

    const update = (searchTerm) => {
        setState({
            ...state,
            q: searchTerm
        })
    }

    return (
        <SearchContext.Provider value={{ state, update }}>
            <QueryClientProvider client={state.queryClient}>
                {children}
            </QueryClientProvider>
        </SearchContext.Provider>
    )
}

const useSearchContext = () => {
    const context = useContext(SearchContext)

    if (context === undefined) {
        throw new Error('useSearchContext must be used within a SearchContextProvider')
    }

    return context
}



export { useSearchContext, SearchContextProvider }
