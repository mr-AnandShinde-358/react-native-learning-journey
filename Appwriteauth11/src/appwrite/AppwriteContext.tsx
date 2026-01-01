import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Appwrite from "./service"

type AppContextType = {
    appwrite:Appwrite;
    isLoggedIn:boolean;
    setIsLoggedIn:boolean;
}


const AppwriteContext = () => {
  return (
    <View>
      <Text>AppwriteContext</Text>
    </View>
  )
}

export default AppwriteContext

const styles = StyleSheet.create({})