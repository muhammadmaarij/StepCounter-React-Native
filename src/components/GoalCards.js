import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Walking from '../../assets/icons/walking.svg';

// import {TouchableOpacity} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GoalCards = ({title, pressHandler, pressHandler2, subtitle}) => {
  // const [val, setVal] = useState(props.initial);

  return (
    <View style={styles.Container}>
      <View style={styles.Card}>
        <TouchableOpacity onPress={pressHandler}>
          <Text style={styles.Icons}>-</Text>
        </TouchableOpacity>
        <View style={styles.CardCenter}>
          <Text style={styles.Text}>{title}</Text>
          <Text style={{fontSize: 16, color: '#B6EADA'}}>{subtitle}</Text>
        </View>
        <TouchableOpacity onPress={pressHandler2}>
          <Text style={styles.Icons}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoalCards;

const styles = StyleSheet.create({
  Card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Icons: {
    fontSize: 50,
    color: '#B6EADA',
  },
  Text: {
    fontSize: 40,
    color: '#B6EADA',
  },
  CardCenter: {
    paddingHorizontal: windowWidth * 0.2,
    alignItems: 'center',
  },
  Container: {
    margin: windowWidth * 0.06,
    padding: windowWidth * 0.04,
    backgroundColor: '#301E67',
    borderRadius: 15,
  },
});
