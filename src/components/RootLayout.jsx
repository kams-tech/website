import React from 'react'
import RootContextProvider from '../root-context.provider'
import Menu from './menu/Menu'

export default function Layout({ children }) {
    return (
        <RootContextProvider>
            <Menu />
            {children}
        </RootContextProvider>
    )
}