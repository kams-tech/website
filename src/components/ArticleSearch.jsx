"use client"

import React from "react";
import { useInfiniteQuery } from "react-query";
import { searchArticles } from "../services/data";

export function ArticleSearch({ initialData }) {

    const { fetchNextPage, data } = useInfiniteQuery({
        queryKey: ['articleSearch'],
        queryFn: (searchParams) => searchArticles(searchParams),
        initialData: { pages: [initialData], pageParams: [] },
    })

    const handleClick = () => {
        fetchNextPage()
    }

    return (
        <div onClick={handleClick}>Here
            <pre>{JSON.stringify(data)}</pre>
        </div>
    )
}