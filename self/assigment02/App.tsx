import { Text, StyleSheet, View,ScrollView } from 'react-native'
import React, { Component } from 'react'
import Login from './components/login/Login'

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Login/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})