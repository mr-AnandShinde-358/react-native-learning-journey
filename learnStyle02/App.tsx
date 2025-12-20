import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <ElevatedCards/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App