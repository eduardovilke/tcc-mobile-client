import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AddServiceCategory from './pages/AddServiceCategory'
import AddServiceInformations from './pages/AddServiceInformations'
import PageSuccess from './pages/Success'
import ServicesRecentsList from './pages/ServicesRecentsList'

const AddServiceCategoryStack = createStackNavigator();

export default function AddServiceStackScreen() {
  return (
    <AddServiceCategoryStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <AddServiceCategoryStack.Screen name="AddServiceCategory" component={AddServiceCategory} />
      <AddServiceCategoryStack.Screen name="AddServiceInformations" component={AddServiceInformations} />
      <AddServiceCategoryStack.Screen name="PageSuccess" component={PageSuccess} />
      <AddServiceCategoryStack.Screen name="ServicesRecentsList" component={ServicesRecentsList} />
    </AddServiceCategoryStack.Navigator>
  );
}