import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Hamburger from "./Hamburger";
import { MenuContextProvider, useMenuContext } from "./context";
import classNames from "classnames";

const Navigation_Wrapper_Open = "navigation__wrapper--open";

const Search = () => {
    return (
        <div className="search">
            <input type="text" />
            <button>Search</button>
        </div>
    );
}

const SubNavigation = ({ link: { name, slug, subLinks = [] } }) => {
    return (
        <div className="navigation__sub-wrapper">
            <ul className="navigation__sub-level">
                <li className="navigation__back">
                    <button type="button" className="navigation__back-trigger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="11" viewBox="0 0 22 11">
                            <path fill="currentColor" d="M5.525 0L0 5.5 5.525 11l1.381-1.375-3.039-3.026H22V4.656H3.612l3.294-3.28L5.525 0z"></path>
                        </svg>
                        Back
                    </button>
                </li>

                <li>
                    <h3 className="navigation__sub-headline">
                        <Link to={slug}>{name}</Link>
                    </h3>
                </li>

                {subLinks.map((subLink, index) => (
                    <li className="navigation__sub-item" key={index}>
                        <Link to={subLink.slug}>{subLink.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const showSubNavigation = (subLinks) => !!subLinks?.length


const Navigation = () => {

    const { menu: { menu } } = useStaticQuery(GET_MENU)

    const { state: { isOpen }, toggle } = useMenuContext()

    const handleOpenSubNavigation = () => {
        console.log('handleOpenSubNavigation')
    }   

    return (
        <div className={classNames('navigation__wrapper', {[Navigation_Wrapper_Open]: isOpen})}>
            <div className="navigation__content">
            {menu.map((item, index) => {
                return (
                    <ul className='navigation__main-level' key={index}>
                        <span className='navigation__headline'>
                            {item.headline}
                        </span>
                        {item.links.map((link, index) => {
                            return (
                                <div className='navigation__main-level' key={index}>
                                    <li key={index}>
                                        {showSubNavigation(link.subLinks) ? (
                                            <div>
                                                <span onClick={handleOpenSubNavigation}>{link.name}</span>
                                                <SubNavigation link={link} />
                                            </div>
                                        ) : (
                                            <Link to={link.slug}>
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                )
            })}
            </div>
        </div>
    )
}

export default function Menu() {
    return (
        <nav className='menu'>
            <MenuContextProvider>
                <Hamburger />
                <Navigation />
                <Search />
            </MenuContextProvider>
        </nav>
    )
}

const GET_MENU = graphql`query GetMenuQuery {
    menu {
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
  }`;