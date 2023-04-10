import React, { createContext, useState, useContext } from "react";

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

const useMenuContext = () => {
    const context = useContext(MenuContext)

    if (context === undefined) {
        throw new Error('useMenuContext must be used within a MenuContextProvider')
    }

    return context
}

export { useMenuContext, MenuContextProvider }