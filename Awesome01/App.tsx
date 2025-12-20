// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NewAppScreen templateFileName="App.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button
} from 'react-native'



function App() {
  return (
    <SafeAreaView>
    <View>
      <Text>Hellow World</Text>
       <Text>Hellow World</Text>
        <Text>Hellow World</Text>
         <Text>Hellow World</Text>
         <Button
  
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
    </SafeAreaView>
  )
}

export default App