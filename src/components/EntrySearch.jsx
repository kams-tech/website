"use client"

import React, { useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { search } from "../services";
import SearchBox from "./search/SearchBox";

export function EntrySearch({ initialData, query }) {

    const { fetchNextPage, data } = useInfiniteQuery({
        queryKey: ['entrySearch'],
        queryFn: (searchParams) => search({ q: query, page: searchParams.pageParam }),
        initialData: { pages: [initialData], pageParams: [] },
    })

    const handleClick = () => {
        fetchNextPage()
    }

    return (
        <div>
            <section className="stage__content-section">
                <div className="stage__content">
                    <h1 className="stage__headline">{233} results for "{query}"</h1>
                </div>
                <div className="stage__additional-content">
                    <SearchBox q={query} />
                </div>
            </section>

            <div data-techline="Search results" class="sc-6acd808d-0 WaGej">
                <div class="sc-884ee1a2-0 cehhvR sectionWrapper__content">
                    <section class="sc-70bf6815-0 iVUMkA">
                        <div class="sc-c5fede87-0 liLNLo">
                            <div class="searchResults__entries">

                                <article class="sc-eba3e9ee-0 dHOYJy">
                                    <a href="/stories/testing-european-charging-networks">
                                        <div class="teaser__entry-image">
                                        </div>
                                        <div class="teaser__entry-content">
                                            <span class="sc-66bf3e5b-0 grEsgH">News</span>
                                            <h3 class="sc-d431a98-0 blKFQg">Testing European charging networks
                                                <span class="sc-911b72da-0 fDba-Df">&nbsp;</span>
                                            </h3>
                                        </div>
                                    </a>
                                </article>

                            </div>
                        </div>
                    </section>
                </div>
            </div>



            <main>



                hello {JSON.stringify(data)}
            </main>

        </div>
    )
}