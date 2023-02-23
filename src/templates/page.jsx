import React from "react"

export default function Page(props) {
    return (
        <div>
            <pre>Page: {JSON.stringify(props)}</pre>
        </div>
    )
}