import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Switch} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SwitchButton = props => {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{color: '#B6EADA', fontSize: 18}}>{props.text}</Text>
      <Switch
        value={switchOn}
        trackColor={{false: '#767577', true: '#5B8FB9'}}
        thumbColor={switchOn ? '#5B8FB9' : '#f4f3f4'}
        onValueChange={() => {
          setSwitchOn(!switchOn);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 45,
    paddingVertical: 26.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#301E67',
    width: windowWidth,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SwitchButton;
