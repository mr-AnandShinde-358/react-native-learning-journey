import { StyleSheet, Text, View,Linking,Image,TouchableOpacity } from 'react-native'
import React from 'react'


export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What't new in Javascript 21 - ES12
            </Text>
        </View>
        <Image
        source={{
            uri:'https://images.pexels.com/photos/29421577/pexels-photo-29421577.jpeg'
        }}
        style={styles.cardImage}
        />
        <View  style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Just like every year brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting muzh more time and directly jump to code with easy to understand examples.
            </Text>
        </View>
        <View  style={styles.FooterContainer}>
           <TouchableOpacity
          onPress={()=>openWebsite('https://ganai.hashnode.dev/real-time-news-fetcher-with-streamlit-and-openai')} 
           >
            <Text style={styles.socialLinks}>Read More</Text>
           </TouchableOpacity>
           <TouchableOpacity
          onPress={()=>openWebsite('https://www.instagram.com/anandshinde358/')} 
           >
            <Text style={styles.socialLinks}>Follow Me</Text>
           </TouchableOpacity>
        
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
    elevatedCard:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:190
    },
    bodyContainer:{
        padding:10
    },
    FooterContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:16,
        color:'#000',
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }
})