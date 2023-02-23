const path = require(`path`)
const { getPages } = require(`./src/services/data`)

exports.createPages = async ({ actions }) => {
    const { createPage } = actions;
    const pageTemplate = path.resolve('src/templates/page.jsx')

    const { data } = await getPages()

    data.pageCollection.items.forEach(page => {
        createPage({
            path: `${page.category.slug}/${page.slug}`,
            component: pageTemplate,
            context: {
                page,
            },
        })
    })
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions
    const menu = await generateMenu()

    createNode({
        menu,
        id: createNodeId("menu"),
        internal: {
            type: 'menu',
            contentDigest: createContentDigest(menu)
        }
    });
}

async function generateMenu() {
    const pageLinks = await getPageLinks()

    return [
        {
            headline: "What we do",
            links: pageLinks
        },
        {
            headline: "What drives us",
            links: [
                {
                    name: "Stories",
                    slug: "stories"
                }
            ]
        }
    ]

}

async function getPageLinks() {
    const { data } = await getPages()

    const pageLinks = data.pageCollection.items.reduce((groups, page) => {
        const { category } = page;
        groups[category.name] = {
            name: category.name,
            slug: category.slug,
            subLinks: [
                ...(groups[category.name]?.subLinks || []),
                {
                    name: page.title,
                    slug: `${category.slug}/${page.slug}`
                }
            ]
        };

        return groups;
    }, {});

    return Object.values(pageLinks);
}


