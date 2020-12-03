import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import EditUser from './pages/EditUser'
import EditUserRegister from './pages/EditUserRegister'

const EditUserStack = createStackNavigator();

export default function EditUserStackScreen() {
  return (
    <EditUserStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <EditUserStack.Screen name="EditUser" component={EditUser} />
      <EditUserStack.Screen name="EditUserRegister" component={EditUserRegister} />
    </EditUserStack.Navigator>
  );
}