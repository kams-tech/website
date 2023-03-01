import React, { createContext, useState } from "react";

const defaultState = {
    isOpen: false
}

const MenuContext = createContext(defaultState)

const MenuContextProvider = ({ children }) => {
    const [state, setState] = useState(defaultState)

    const toggle = () => {
        setState({
            ...state,
            isOpen: !state.isOpen
        })
    }

    return (
        <MenuContext.Provider value={{ state, toggle }}>
            {children}
        </MenuContext.Provider>
    )
}

export { MenuContext, MenuContextProvider }