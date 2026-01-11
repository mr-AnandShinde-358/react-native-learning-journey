import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from './routes/Router';
import AppwriteProvider from './appwrite/AppwriteContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* IMPORTANT */}
      <AppwriteProvider>
        <Router />
      </AppwriteProvider>

    </SafeAreaProvider>
  );
}

export default App;
