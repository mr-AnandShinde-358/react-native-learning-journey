import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
          uri:'https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahal</Text>
        <Text style={styles.cardLabel}>Pink city</Text>
        <Text style={styles.cardDescription}>The Hawa Mahal is a palacein the city of Jaipur, India Built from red and pink sandstone, it is on the edge of the city Palace.</Text>
        <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8
  },
  card:{
    width:350,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  cardElevated:{
    backgroundColor:'#ffff',
    color:'#000000',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    }
  },
  cardImage:{
    height:180,
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardTitle:{
    color:'#000000',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:4
  },
  cardLabel:{
    fontSize:14,
    color:'#000000',
        marginBottom:6
  },
  cardDescription:{
    fontSize:12,
    color:'#242B2E',
        marginBottom:12,
        marginTop:6,
        flexShrink:1
  },
  cardFooter:{

    color:'#000000'
  }
})