import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext({})

const SearchContextProvider = ({ q = "", children }) => {
    const [state, setState] = useState({q})

    const update = (searchTerm) => {
        setState({
            ...state,
            q: searchTerm
        })
    }

    return (
        <SearchContext.Provider value={{ state, update }}>
            {children}
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
