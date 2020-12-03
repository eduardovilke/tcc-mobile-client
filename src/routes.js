import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Register2 from './pages/Register2';
import Feed from './pages/Feed';

import ServicesRecentListStackScreen from './ServicesRecentListStackScreen';
import AddServiceStackScreen from './AddServiceStackScreen';
import EditUserStackScreen from './EditUserStackScreen';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initinalRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Register2" component={Register2}/>
        <Stack.Screen name="Feed" component={Feed}/>
        <Stack.Screen name="ServicesRecentListStackScreen" component={ServicesRecentListStackScreen}/>
        <Stack.Screen name="AddServiceCategory" component={AddServiceStackScreen}/>
        <Stack.Screen name="EditUserStackScreen" component={EditUserStackScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}