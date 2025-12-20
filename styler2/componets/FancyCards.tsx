import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trading Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
    <Image
    source={
       {
        uri:'https://cdn.pixabay.com/photo/2018/03/18/21/13/hawa-mahal-jaipur-3238364_1280.jpg'
    }}
    style={styles.cardImage}
    />

    <View style={styles.cardBody}>
    <Text style={styles.cardTitle}> Hawa Mahal
    </Text>
    <Text style={styles.cardLabel}>Pink City, jaipur</Text>
    <Text style={styles.cardDescription}>
        The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the city palace.
    </Text>
    <Text style={styles.cardFooter}>
    12 mins away
    </Text>
    </View>
      </View>
    </View>
  )
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
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:9,
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
        color:'#000000',
        fontSize:14,
        marginBottom:6
    },
    cardDescription:{
        color:'#6d6f73',
        fontSize:14,
         marginBottom:12,
         marginTop:6,
         flexShrink:1
    },
    cardFooter:{
        color:'#000000',
        fontSize:12
    }
})