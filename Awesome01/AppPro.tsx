import React, { JSX } from 'react';

import { View, Text, SafeAreaView, useColorScheme,StyleSheet } from 'react-native';

function AppPro():JSX.Element {

 const scheme = useColorScheme()==="dark"; // 'dark' or 'light'

  return (
     <View style={[styles.container, scheme ? styles.dark : styles.light]}>
      <Text style={scheme ? styles.darkText : styles.lightText}>
        {scheme ? 'Dark Mode' : 'Light Mode'}
        Hellow wolrd
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
   light: {
    backgroundColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#000000',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
})

export default AppPro;
