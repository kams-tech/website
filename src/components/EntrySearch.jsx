import React from "react";
import { useSearchContext, SearchBox, executeSearch, useQuery } from "../components/search";

const Key = "EntrySearch"

export default function EntrySearch() {

    const { state } = useSearchContext()

    const {
        fetchNextPage,
        data,
        hasNextPage
    } = useQuery({
        key: [Key, state.q],
        queryFn: (params) => executeSearch({ q: state.q, page: params.pageParam }),
        initialData: state.initialData
    })

    return (
        <div>
            <section className="stage__content-section">
                <div className="stage__content">
                    <h1 className="stage__headline">{data?.pages[0].total} results for "{state?.q}"</h1>
                </div>
                <div className="stage__additional-content">
                    <SearchBox />
                </div>
            </section>

            <section className="searchResults__content-section">
                <div className="searchResults__entries">
                    {data?.pages
                        .flatMap((page) => page.items)
                        .map((item) => (
                            <article className="teaser__entry" key={item.id}>
                                <a href="/stories/testing-european-charging-networks">
                                    <div className="teaser__entry-image">
                                    </div>
                                    <div className="teaser__entry-content">
                                        <span className="teaser__entry-category">News</span>
                                        <h3 className="teaser__entry-heading">
                                            Testing European charging networks
                                        </h3>
                                    </div>
                                </a>
                            </article>
                        ))
                    }
                </div>
                {hasNextPage &&
                    <div className="searchResults__load-more">
                        <button className="searchResults__load-more-button" type="button" onClick={fetchNextPage}>
                            See more
                        </button>
                    </div>
                }
            </section>
        </div>
    )
}