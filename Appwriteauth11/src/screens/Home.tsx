import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

// react native elements
import { Button } from 'react-native-paper';

//snackbar
import Snackbar from 'react-native-snackbar';
//context Api
import { AppwriteContext } from '../appwrite/AppwriteContext';
import { SafeAreaView } from 'react-native-safe-area-context';

type UserObj = {
  name: String;
  email: String;
};

const Home = () => {
  const [userData, setUserData] = useState<UserObj>();
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);
  const handleLogout = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'Logout successfully',
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  };

  useEffect(() => {
    appwrite.getCurrentUser().then(response => {
      if (response) {
        const user: UserObj = {
          name: response.name,
          email: response.email,
        };
        setUserData(user)
      }
    });
  }, [appwrite]);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={{
              uri: 'https://appwrite.io/images-ee/blog/og-private-beta.png',
              width: 400,
              height: 300,
              cache: 'default',
            }}
            resizeMode="contain"
          />
          <Text style={styles.message}>
            Build Fast. Scale Big. All in One Place.
          </Text>
          {userData && (
            <View style={styles.userContainer}>
              <Text style={styles.userDetails}>Name: {userData.name}</Text>
              <Text style={styles.userDetails}>Email: {userData.email}</Text>
            </View>
          )}
        </View>
        <Button
     mode="contained" 
        onPress={handleLogout} 
        style={styles.button}
        contentStyle={{ height: 50 }} // Button ki height
        >Logout</Button>
      </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D32',
  },
  welcomeContainer: {
    padding: 12,

    flex: 1,
    alignItems: 'center',
  },
  message: {
    fontSize: 26,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  userContainer: {
    marginTop: 24,
  },
  userDetails: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  button: {
    marginTop: 10,
    borderRadius: 8,
  },
});
