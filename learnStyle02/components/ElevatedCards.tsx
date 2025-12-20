import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'


export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>
                tap
            </Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>
                me
            </Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>
                to
            </Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>
                scroll
            </Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>
                more...
            </Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>
                😀
            </Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>
                tap
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

     headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        padding:8
    },
    Card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        color:'#000000'
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4 ,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
        shadowRadius:2
    }

})