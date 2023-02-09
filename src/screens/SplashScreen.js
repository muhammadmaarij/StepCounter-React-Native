import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CircularProgress from 'react-native-circular-progress-indicator';

const SplashScreen = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={{top: 30, fontSize: 42}}>SplashScreen</Text>
      </TouchableOpacity>

      <CircularProgress
        value={60}
        radius={120}
        duration={2000}
        progressValueColor={'#ecf0f1'}
        maxValue={5000}
        title={'KM/H'}
        titleColor={'white'}
        titleStyle={{fontWeight: 'bold'}}
      />
    </View>
  );
};

export default SplashScreen;
