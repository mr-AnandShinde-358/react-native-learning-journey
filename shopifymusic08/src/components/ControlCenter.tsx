import React from 'react';
import { Pressable, StyleSheet, View, ActivityIndicator } from 'react-native';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react-native';

const ControlCenter = () => {
  // Version 4 fix: Hook ab object return karta hai
  const playerState = usePlaybackState();

  const skipToNext = async () => await TrackPlayer.skipToNext();
  const skipToPrevious = async () => await TrackPlayer.skipToPrevious();

  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getActiveTrack();

    if (currentTrack !== null) {
      // ✅ FIX: playerState object ke andar '.state' check karna hai
      if (playerState.state === State.Playing) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <SkipBack color="#FFFFFF" size={40} />
      </Pressable>

      <Pressable onPress={togglePlayback} style={styles.playButton}>
        {/* ✅ FIX: Loading state check bhi '.state' ke sath hoga */}
        {playerState.state === State.Buffering ||
        playerState.state === State.Loading ? (
          <ActivityIndicator size="large" color="#FFF" />
        ) : // ✅ FIX: Icon logic bhi '.state' check karega
        playerState.state === State.Playing ? (
          <Pause color="#ffffff" size={60} fill="#FFF" />
        ) : (
          <Play color="#ffffff" size={60} fill="#FFF" />
        )}
      </Pressable>

      <Pressable onPress={skipToNext}>
        <SkipForward color="#FFFFFF" size={40} />
      </Pressable>
    </View>
  );
};

export default ControlCenter;

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    marginHorizontal: 24,
  },
});
