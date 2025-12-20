import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export class Evalator extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Evalator</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardEvalator]}>
                <Text>Tab</Text>
            </View>
            <View style={[styles.card,styles.cardEvalator]}>
                <Text>Mee</Text>
            </View><View style={[styles.card,styles.cardEvalator]}>
                <Text>To</Text>
            </View><View style={[styles.card,styles.cardEvalator]}>
                <Text>scroll</Text>
            </View><View style={[styles.card,styles.cardEvalator]}>
                <Text>more...</Text>
            </View><View style={[styles.card,styles.cardEvalator]}>
                <Text>😀</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default Evalator

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        color:'white'

    },
  container:{
    padding:8
  },
  card:{
    width:100,
    height:100,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4,
    margin:8
  },
  cardEvalator:{
    backgroundColor:'#CAD5E2',
    elevation:4,
    shadowOffset:{
        width:4,
        height:4
    },
    shadowColor:'#CAD5E2',
    shadowOpacity:0.4,
    shadowRadius:2
  }
})