import React, { useState, useEffect } from 'react';
import { ActivityIndicator,  StatusBar, StyleSheet, View } from 'react-native';
import { setupPlayer, addTrack } from '../musicPlayerServices'

import MusicPlayer from './screens/MusicPlayer';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();
    if (isSetup) {
      await addTrack();
    }
    setIsPlayerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001d23'
  },
});

export default App;