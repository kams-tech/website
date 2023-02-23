import { useState, useEffect } from "react";

export function useQuery(query) {

    const [response, setResponse] = useState();
    const [errors, setErrors] = useState();

    useEffect(() => {
        const executeQuery = async () => {
            const res = await fetch(baseUrl, {
                ...defaultQueryOptions,
                body: query
            })
            const { data, errors } = await res.json()

            setResponse(data)
            setErrors(errors)
        }

        executeQuery()

    }, [query]);

    return [
        response,
        errors
    ]
}

const baseUrl = 'https://graphql.contentful.com/content/v1/spaces/y9029urma92g/';
const defaultQueryOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer Wv3JP4RxSTWpaGOYu-HRbiRyYlxIeFilnxlcH-arvko"
    }
}