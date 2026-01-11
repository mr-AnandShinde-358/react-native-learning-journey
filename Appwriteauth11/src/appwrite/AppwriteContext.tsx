import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, FC, PropsWithChildren, useState } from 'react'
import Appwrite from "./service"

type AppContextType = {
    appwrite: Appwrite;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

// FIX: Do NOT instantiate 'new Appwrite()' here. 
// Use type casting to bypass TS warnings for the default value.
export const AppwriteContext = createContext<AppContextType>({
    appwrite: {} as Appwrite, 
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    // Instantiate it here instead. 
    // This guarantees it runs inside the React Component lifecycle.
    const [appwrite] = useState(() => new Appwrite());

    const defaultValue = {
      appwrite,
      isLoggedIn,
      setIsLoggedIn,
    }

  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  )
}

export default AppwriteProvider

const styles = StyleSheet.create({})