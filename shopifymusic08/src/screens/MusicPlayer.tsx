import { Dimensions, Image, StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from 'react-native-track-player';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const { width } = Dimensions.get('window');

const MusicPlayer = () => {
  // Typescript Error Fix: Allow null or undefined explicitly
  const [track, setTrack] = useState<Track | null | undefined>(null);

  // 1. Initial Load: App khulte hi gana load kare
  useEffect(() => {
    async function setupTrack() {
        const activeTrack = await TrackPlayer.getActiveTrack();
        if (activeTrack) {
            setTrack(activeTrack);
        }
    }
    setupTrack();
  }, []);

  // 2. Event Listener: Jab gana change ho
  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
    if (event.type === Event.PlaybackActiveTrackChanged && event.track) {
        setTrack(event.track); // Directly set the track object
    }
  });

  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork ? (
            <Image
              style={styles.albumArtImg}
              // Artwork uri ko string me convert karke pass karein
              source={{ uri: track.artwork.toString() }}
            />
          ) : (
            <View style={[styles.albumArtImg, { backgroundColor: '#333' }]}>
               {/* Agar photo na ho to Placeholder */}
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderArtWork()}
      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
    width: '100%',
  },
});