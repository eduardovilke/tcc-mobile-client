import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ServicesRecentListStackScreen from '../../ServicesRecentListStackScreen';
import AddServiceStackScreen from '../../AddServiceStackScreen';
import EditUserStackScreen from '../../EditUserStackScreen'

const ServicesRecentListRoute = () => <ServicesRecentListStackScreen />;
const AddServiceRoute = () => <AddServiceStackScreen />;
const EditUserRoute = () => <EditUserStackScreen />;

const Tab = createMaterialBottomTabNavigator();

export default function Feed(){

  const ServicesRecentsRoute = () => <ServicesRecentsList />;
  return(
    <Tab.Navigator
      initialRouteName="Feed"
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={{ backgroundColor: '#4fb4c8' }}
      activeColor="#FFFFFF"
      inactiveColor="#FFFFFF"
    >
      <Tab.Screen
        name="Início"
        component={ServicesRecentListRoute}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Buscar Serviço"
        component={AddServiceRoute}
        options={{
          tabBarIcon: 'plus',
        }}
      />
      <Tab.Screen
        name="Minha área"
        component={EditUserRoute}
        options={{
          tabBarIcon: 'account',
        }}
      />
    </Tab.Navigator>
  )
}