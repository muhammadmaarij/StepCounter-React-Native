import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Frame from '../../assets/icons/frame.svg';
import Notifications from '../../assets/icons/notifications.svg';
import Sliders from '../../assets/icons/sliders.svg';
import Walking from '../../assets/icons/walking.svg';
import Cals from '../../assets/icons/cals.svg';
import Dist from '../../assets/icons/dist.svg';
import Time from '../../assets/icons/time.svg';
import CircularProgress from 'react-native-circular-progress-indicator';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const IndexScreen = () => {
  const [count, setCount] = useState(0);
  const [dist, setDist] = useState(0);

  return (
    <View style={styles.home}>
      <View style={styles.day}>
        <TouchableOpacity>
          <Text style={styles.text}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Month</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.circle}>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
            setDist((count + 1) * 3);
          }}>
          <View style={styles.counter}>
            {/* <Walking />
            <Text style={styles.steps}>{count}</Text>
            <Text style={styles.goal}>Today</Text>
            <Text style={styles.goal}>Goal 5,000</Text> */}
            <CircularProgress
              value={count}
              radius={120}
              duration={500}
              progressValueColor={'#B6EADA'}
              maxValue={50}
              title={'Today'}
              titleColor={'#5B8FB9'}
              titleStyle={{fontSize: 12}}
              activeStrokeColor={'#301E67'}
              inActiveStrokeColor={'#B6EADA'}
              subtitle={`Goal 50`}
              subtitleStyle={{fontSize: 12}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.cal}>
          <View style={{padding: windowWidth * 0.1}}>
            <View style={styles.smallCircle}>
              <Cals />
            </View>
            <Text style={styles.calText}>7.1 kcal</Text>
          </View>
          <View style={{padding: windowWidth * 0.1}}>
            <View style={styles.smallCircle}>
              <Dist />
            </View>
            <Text style={styles.calText}>{dist + ' m'}</Text>
          </View>
          <View style={{padding: windowWidth * 0.1}}>
            <View style={styles.smallCircle}>
              <Time />
            </View>
            <Text style={styles.calText}>3 min</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: '#B6EADA',
          borderBottomWidth: 1,
          top: windowHeight * 0.3,
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
  home: {
    backgroundColor: '#03001C',
    color: '#B6EADA',
    width: windowWidth,
    height: windowHeight,
  },
  text: {
    color: '#B6EADA',
    width: windowWidth * 0.288,
    height: windowHeight * 0.05,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5B8FB9',
    textAlign: 'center',
    top: 10,
    padding: 10,
    margin: 10,
  },
  day: {
    flexDirection: 'row',
    // top: 50,
  },
  counter: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    borderRadius: windowWidth * 0.3,
    // borderWidth: 10,
    // borderColor: '#03001C',
  },
  steps: {
    fontSize: 54,
    fontWeight: '700',
    color: '#B6EADA',
    padding: 2,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    top: windowHeight * 0.15,
  },
  goal: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5B8FB9',
  },
  cal: {
    top: 150,
    width: windowWidth,
    flexDirection: 'row',
    left: 6,
  },
  calText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#B6EADA',
    padding: 2,
    textAlign: 'center',
  },
  smallCircle: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: windowWidth * 0.075,
    borderWidth: 2,
    borderColor: '#5B8FB9',
  },
  bottomNav: {
    top: windowHeight * 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 50,
    alignItems: 'stretch',
  },
  navText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#B6EADA',
    textAlign: 'center',
  },
});

export default IndexScreen;
