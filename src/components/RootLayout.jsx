import React from 'react'
import RootContextProvider from '../root-context.provider'
import Menu from './Menu'

export default function Layout({ children }) {
    return (
        <RootContextProvider>
            <Menu />
            {children}
        </RootContextProvider>
    )
}