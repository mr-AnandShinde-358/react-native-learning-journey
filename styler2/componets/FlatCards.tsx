import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>
         <View style={[styles.card,styles.cardTwo]}>
            <Text>green</Text>
        </View>
         <View style={[styles.card,styles.cardThree]}>
            <Text>blue</Text>
        </View>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
         color:'white'

    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card:{
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cardOne:{
        backgroundColor:'#EF5354'
    },
    cardTwo:{
        backgroundColor:'#50DBB4'
    },
    cardThree:{
        backgroundColor:'#5DA3FA'
    }
})