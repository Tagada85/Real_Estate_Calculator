import React from 'react';
import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import NewBuildingScreen from './NewBuildingScreen'


const App = StackNavigator({
  Home: { screen: HomeScreen },
  NewBuilding: { screen: NewBuildingScreen }
})

export default App
