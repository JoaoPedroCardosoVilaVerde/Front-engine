import React, { createContext, useState } from 'react'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({ name: "Viagem", Valor: "000" })
    return (
        <AuthContext.Provider value={{ data, setData }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;