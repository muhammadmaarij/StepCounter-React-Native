import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SwitchButton from '../components/SwitchButton';
import Notifications from '../../assets/icons/notifications.svg';
import Sliders from '../../assets/icons/sliders.svg';
import Walking from '../../assets/icons/walking.svg';
import GoalCards from '../components/GoalCards';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GoalsScreen = () => {
  const [steps, setSteps] = useState(3000);
  const [cals, setCals] = useState(300);
  const [dist, setDist] = useState(2.0);
  const [time, setTime] = useState(10);

  const handle1 = title => {
    switch (title) {
      case 'Steps':
        setSteps(steps - 1000);
        break;
      case 'kcal':
        setCals(cals - 100);
        break;
      case 'km':
        setDist(dist - 1);
        break;
      case 'Time':
        setTime(time - 5);
        break;
    }
  };
  const handle2 = title => {
    switch (title) {
      case 'Steps':
        setSteps(steps + 1000);
        break;
      case 'kcal':
        setCals(cals + 100);
        break;
      case 'km':
        setDist(dist + 1);
        break;
      case 'Time':
        setTime(time + 5);
        break;
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#03001C',
        color: '#B6EADA',
        width: windowWidth,
        height: windowHeight,
      }}>
      <View>
        <Text
          style={{
            color: '#B6EADA',
            fontSize: 36,
            paddingHorizontal: 15,
            paddingVertical: 30,
          }}>
          Goals
        </Text>
        <Text
          style={{
            color: '#5B8FB9',
            fontSize: 16,
            paddingHorizontal: 40,
            paddingBottom: 10,
          }}>
          Set Goals, Count Steps, Burn Calories
        </Text>
        <ScrollView style={{height: windowHeight * 0.72}}>
          <GoalCards
            title={steps}
            subtitle="Steps"
            initial={steps}
            pressHandler={() => handle1('Steps')}
            pressHandler2={() => handle2('Steps')}
            // onPress={() => console.log('press')}
          />
          <GoalCards
            title={cals}
            subtitle="kcal"
            initial={cals}
            pressHandler={() => handle1('kcal')}
            pressHandler2={() => handle2('kcal')}
          />
          <GoalCards
            title={dist + '.0'}
            subtitle="km"
            initial={dist}
            pressHandler={() => handle1('km')}
            pressHandler2={() => handle2('km')}
          />
          <GoalCards
            title={time + ' min'}
            subtitle="Time"
            initial={time}
            pressHandler={() => handle1('Time')}
            pressHandler2={() => handle2('Time')}
          />
        </ScrollView>
      </View>

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

export default GoalsScreen;
