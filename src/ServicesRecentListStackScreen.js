import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import ServicesRecentList from './pages/ServicesRecentsList'
import ServiceInformation from './pages/ServiceInformation'

const ServicesRecentListStack = createStackNavigator();

export default function ServicesRecentListStackScreen(){
  return (
    <ServicesRecentListStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <ServicesRecentListStack.Screen 
        name="ServicesRecentList"
        component={ServicesRecentList}
      />
      <ServicesRecentListStack.Screen 
        name="ServiceInformation"
        component={ServiceInformation}
      />

    </ServicesRecentListStack.Navigator>
  )
}