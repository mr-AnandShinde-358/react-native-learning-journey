import { Dimensions, Image, StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from 'react-native-track-player';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const { width } = Dimensions.get('window');

const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null| undefined>(null);

  // 1. Initial Load
  useEffect(() => {
    async function getTrack() {
        const activeTrack = await TrackPlayer.getActiveTrack();
        if (activeTrack) {
            setTrack(activeTrack);
        }
    }
    getTrack();
  }, []);

  // 2. Event Listener (Fix kiya gaya hai)
  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
    if (event.type === Event.PlaybackActiveTrackChanged) {
        // Agar event me direct track object hai
        if (event.track) {
            setTrack(event.track);
        } 
        // Agar index hai, to fetch karo (Fallback method)
        else if (event.index !== undefined) {
             const playingTrack = await TrackPlayer.getTrack(event.index);
             setTrack(playingTrack);
        }
    }
  });

  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork ? (
            <Image
              style={styles.albumArtImg}
              source={{ uri: track?.artwork?.toString() }}
            />
          ) : (
            <View style={[styles.albumArtImg, { backgroundColor: '#555', justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{color: '#FFF'}}>Loading...</Text>
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