import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SwitchButton from '../components/SwitchButton';
import Notifications from '../../assets/icons/notifications.svg';
import Sliders from '../../assets/icons/sliders.svg';
import Walking from '../../assets/icons/walking.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NotificationsScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#03001C',
        color: '#B6EADA',
        width: windowWidth,
        height: windowHeight,
      }}>
      <Text
        style={{
          color: '#B6EADA',
          fontSize: 36,
          paddingHorizontal: 15,
          paddingVertical: 30,
        }}>
        Notifications
      </Text>
      <Text
        style={{
          color: '#5B8FB9',
          fontSize: 16,
          paddingHorizontal: 40,
          paddingBottom: 1,
        }}>
        Goal achieved
      </Text>
      <SwitchButton text="Steps" />
      <SwitchButton text="Calories" />
      <SwitchButton text="Distance" />
      <SwitchButton text="Duration" />
      <SwitchButton text="Weekly Report" />
      <SwitchButton text="Weekly Progress" />
      <SwitchButton text="Activity Remainder" />

      <View
        style={{
          borderBottomColor: '#B6EADA',
          borderBottomWidth: 1,
        }}></View>

      {/* <View style={styles.bottomNav}>
        <TouchableOpacity>
          <View>
            <Notifications style={{left: 25}} />
            <Text style={styles.navText}>Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Walking style={{left: 2}} />
            <Text style={styles.navText}>Steps</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Sliders style={{left: 10}} />
            <Text style={styles.navText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 25,
    alignItems: 'stretch',
  },
  navText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#B6EADA',
    textAlign: 'center',
  },
});

export default NotificationsScreen;
