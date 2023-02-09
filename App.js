/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import GoalCards from './src/components/GoalCards';
import CounterScreen from './src/screens/CounterScreen';
import GoalsScreen from './src/screens/GoalsScreen';
import IndexScreen from './src/screens/IndexScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SplashScreen from './src/screens/SplashScreen';
import Navigations from './src/Navigation/Navigations';

function App() {
  return <Navigations />;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
