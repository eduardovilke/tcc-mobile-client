import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ServicesRecentsList from '../ServicesRecentsList/index';
import AddService from '../AddService/index';

const ServicesRecentsRoute = () => <ServicesRecentsList />;

const AddServiceRoute = () => <AddService />;

const RecentsRoute = () => <Text>Recents</Text>;

const Tab = createMaterialBottomTabNavigator();

export default function Feed(){
    
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
        component={ServicesRecentsRoute}
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
        component={ServicesRecentsRoute}
        options={{
          tabBarIcon: 'account',
        }}
      />
    </Tab.Navigator>
  )
}