import React from 'react'

const rootContextValue = {
    data: {
        menu: {
            open: false
        }
    }
}

export const RootContext = React.createContext(rootContextValue)

export default function RootContextProvider({ children }) {
    const [data, setData] = React.useState(rootContextValue.data)

    const set = (key, value) => {
        setData({
            ...data,
            [key]: value
        })
    }

    return (
        <RootContext.Provider value={{ data, set }}>
            {children}
        </RootContext.Provider>
    )
}