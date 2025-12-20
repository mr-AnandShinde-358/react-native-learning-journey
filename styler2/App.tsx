import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './componets/FlatCards'
import Evalator from './componets/Evalator'
import FancyCards from './componets/FancyCards'

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
      <FlatCards/>
      <Evalator/>
      <FancyCards/>
      <FancyCards/>
      <FancyCards/>
      <FancyCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  body:{
    // backgroundColor:'white',
    // flex:1
  }
})