import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import Main from '../pages/Main';
import Buscar from '../pages/Buscar';
import Biblioteca from '../pages/Biblioteca';

export default function createRouter() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.2)',
        style: {
          backgroundColor: '#101010',
          borderTopColor: '#101010',
        },
        labelStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Início"
        component={Main}
        options={{
          title: 'Início',
          tabBarIcon: ({color}) => (
            <Icon name="home-variant" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          title: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon2 name="search" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Biblioteca"
        component={Biblioteca}
        options={{
          title: 'Sua Biblioteca',
          tabBarIcon: ({color}) => (
            <Icon name="reorder-vertical" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
