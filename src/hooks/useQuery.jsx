import React from "react";
import { useInfiniteQuery } from "react-query";


const toLowercase = (key) => typeof key === 'string' ? key.toLowerCase() : key

const getQueryKey = (keyArr) => {
    return keyArr.reduce((acc, current) => ([...(acc || []), toLowercase(current)]), [])
}

const getCurrentItemCount = (allPages) => 
    allPages.reduce((acc, page) => (acc + page.items.length), 0)

const getNextPageParam = (lastPage, allPages) => {
    const itemCount = getCurrentItemCount(allPages)
    if (itemCount < lastPage.total) {
        return lastPage.page + 1
    }
}

const useQuery = ({ key, queryFn, initialData, }) => {

    const { 
        fetchNextPage, 
        data, 
        hasNextPage
    } = useInfiniteQuery({
        queryKey: getQueryKey(key),
        queryFn: (params) => queryFn(params),
        initialData: { pages: [initialData], pageParams: [] },
        getNextPageParam: (lastPage, allPages) => getNextPageParam(lastPage, allPages)
    })

    return {
        fetchNextPage,
        data,
        hasNextPage
    }
}

export default useQuery