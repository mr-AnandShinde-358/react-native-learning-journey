import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import { useProgress } from 'react-native-track-player'

const SongSlider = () => {
    const { position, duration } = useProgress()

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

  return (
    <View>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor='#FFFFFF'
        minimumTrackTintColor='#FFFFFF'
        maximumTrackTintColor='#FFF'
        style={styles.sliderContainer}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{formatTime(position)}</Text>
        <Text style={styles.time}>{formatTime(duration - position)}</Text>
      </View>
    </View>
  )
}

export default SongSlider

const styles = StyleSheet.create({
    sliderContainer: {
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection: 'row',
    },
    timeContainer: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        color: '#fff',
    }
})