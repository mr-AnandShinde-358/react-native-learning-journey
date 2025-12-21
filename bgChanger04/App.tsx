import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [randomColorOne,setRandomColorOne]=useState('#ffffff')
  const [randomColorTwo,setRandomColorTwo]=useState('#ffffff')
  const [randomColorThree,setRandomColorThree]=useState('#ffffff')
  const [randomColorFour,setRandomColorFour]=useState('#ffffff')
  const [randomColorFive,setRandomColorFive]=useState('#ffffff')
  const [randomColorSix,setRandomColorSix]=useState('#ffffff')

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    let colorOne = '#';
    let colorTwo = '#';
    let colorThree = '#';
    let colorFour = '#';
    let colorFive = '#';
    let colorSix = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      colorOne += hexRange[Math.floor(Math.random()*16)]
      colorTwo += hexRange[Math.floor(Math.random()*16)]
      colorThree += hexRange[Math.floor(Math.random()*16)]
      colorFour += hexRange[Math.floor(Math.random()*16)]
      colorFive += hexRange[Math.floor(Math.random()*16)]
      colorSix += hexRange[Math.floor(Math.random()*16)]

    }
    setRandomBackground(color)
    setRandomColorOne(colorOne)
    setRandomColorTwo(colorTwo)
    setRandomColorThree(colorThree)
    setRandomColorFour(colorFour)
    setRandomColorFive(colorFive)
    setRandomColorSix(colorSix)
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      
      <View style={[styles.container, { backgroundColor: randomBackground }]}>

         <View style={styles.middleContainer}>
           <View style={[styles.circle,{backgroundColor:randomColorOne}]}>
        </View>
        <View style={[styles.rectangle,{backgroundColor:randomColorTwo}]}>
        </View>
        <View style={styles.containerTriangle}>
           <View style={[styles.tringle,{borderBottomColor:randomColorThree}]}></View>
        </View>
        </View>
        // button click
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.middleContainer}>
           <View style={[styles.circle,{backgroundColor:randomColorFour}]}>
        </View>
        <View style={[styles.rectangle,{backgroundColor:randomColorFive}]}>
        </View>
        <View style={styles.containerTriangle}>
          <View style={[styles.tringle,{borderBottomColor:randomColorSix}]}></View>
        </View>
        </View>
       
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  circle: {
    backgroundColor: 'red',
    padding: 50,
    borderRadius: 100,
    marginTop: 20,
    height:100
  },
  rectangle: {
    backgroundColor: 'red',
    padding: 50,
    // borderRadius:100,
    marginTop: 20,
    height:100
  },
  tringle: {
    marginTop: 20,
    borderBottomWidth: 100,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'blue',
    width: 0,
    height: 0,
  },
  containerTriangle: {
    flex: 1,
  },
  middleContainer:{
    flex:1,
    flexDirection:'row',
    columnGap:30,
    marginTop:100
  }
});
