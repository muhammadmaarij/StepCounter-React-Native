import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexScreen from '../screens/IndexScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import GoalsScreen from '../screens/GoalsScreen';
import Notifications from '../../assets/icons/notifications.svg';
import Sliders from '../../assets/icons/sliders.svg';
import Walking from '../../assets/icons/walking.svg';

const Tab = createBottomTabNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Index"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            height: 75,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: '#03001C',
            position: 'absolute',
            borderTopWidth: 0,
            paddingBottom: 10,
          },
        })}>
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Notifications',
            tabBarInactiveTintColor: '#5B8FB9',
            tabBarActiveTintColor: '#B6EADA',
            tabBarIcon: ({color, size}) => <Notifications style={{left: 2}} />,
          }}
        />
        <Tab.Screen
          name="Index"
          component={IndexScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Steps',
            tabBarInactiveTintColor: '#5B8FB9',
            tabBarActiveTintColor: '#B6EADA',
            tabBarIcon: ({color, size}) => <Walking style={{left: 2}} />,
          }}
        />
        <Tab.Screen
          name="Goals"
          component={GoalsScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Goals',
            tabBarInactiveTintColor: '#5B8FB9',
            tabBarActiveTintColor: '#B6EADA',
            tabBarIcon: ({color, size}) => <Sliders style={{left: 2}} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
