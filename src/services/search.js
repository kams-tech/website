const contentful = require('contentful')

const client = contentful.createClient({
    space: 'y9029urma92g',
    accessToken: 'Wv3JP4RxSTWpaGOYu-HRbiRyYlxIeFilnxlcH-arvko',
    resolveLinks: true,
    removeUnresolved: true
})

const search = async ({ page = 1, limit = 1, q }) => {
    
    const queryParams = {
        limit,
        ...(q && {query: q}),
        ...(page && {skip: (page - 1) * limit})
    }

    const response = await executeQuery(queryParams)

    return {
        total: response.total,
        skip: response.skip,
        page,
        limit: response.limit,
        items: response.items.map(item => ({
            fields: item.fields,
            type: item.sys.contentType.sys.id,
            id: item.sys.id
        }))
    }
}


const executeQuery = async (queryParams) => {

    const response = await client.getEntries(queryParams);

    return response;
}

export default search