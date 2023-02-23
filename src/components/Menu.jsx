import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const GET_MENU = graphql`query MenuQuery {
    allMenu {
      nodes {
        menu {
          headline
          links {
            name
            slug
            subLinks {
              name
              slug
            }
          }
        }
      }
    }
  }`

export default function Menu() {

    const data = useStaticQuery(GET_MENU)
    const [count, setCount] = React.useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <Link to="/capabilities/testing-validation">Testing & Validation</Link>
            <Link to="/stories">Stories</Link>
            <pre onClick={handleClick}>{count}</pre>
            <pre>{JSON.stringify(data)}</pre>
        </div>
    )
}