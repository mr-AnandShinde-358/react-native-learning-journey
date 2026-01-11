import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loding = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#1d9bf0"/>
      <Text>Loding</Text>
    </View>
  )
}

export default Loding

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})