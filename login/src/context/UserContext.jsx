import { createContext, useState } from "react";

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("isLoggedIn") || false)
    const [userLogged, setUserLogged] = useState(localStorage.getItem("user") || null)
    return (
        <UserContext.Provider value={{isLoggedIn, setLoggedIn, userLogged, setUserLogged}}>{children}</UserContext.Provider>
    )
}