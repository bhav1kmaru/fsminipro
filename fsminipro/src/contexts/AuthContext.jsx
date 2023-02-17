import { createContext, useState } from "react";

export const AuthContext=createContext()

export default function AuthContextProvider({children}){
    const [isAuth,setIsAuth]=useState(false)
    const login=()=>{
        setIsAuth(true)
    }
    const logout=()=>{
        setIsAuth(false)
    }
    return(
        <AuthContext.Provider value={{login,logout,isAuth}}>{children}</AuthContext.Provider>
    )
}