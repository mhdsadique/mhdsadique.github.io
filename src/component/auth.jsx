
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const AuthContext=createContext()
export const AuthProvider = ({children}) => {
    const [theme,setTheme]=useState(false)
// console.log(theme)
    const changeTheme=()=>{
        setTheme(!theme)
    }
  return (
    <AuthContext.Provider value={{theme,changeTheme}} >
        {children}
    </AuthContext.Provider>
  )
}
