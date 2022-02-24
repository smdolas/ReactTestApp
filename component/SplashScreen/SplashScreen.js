import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import ThemeConstants from '../../styles/ThemeConstants';
import {styles} from './SplashScreenStyle';

const SplashScreen = props => {
  const [isTimeDownCounterStarted, setTimeDownCounterStarted] = useState(false);

  useEffect(() => {
    if (!isTimeDownCounterStarted) {
      setTimeout(() => {
        props.navigation.replace('Coinlist');
      }, 2000);
      setTimeDownCounterStarted(true);
    }
  }, [isTimeDownCounterStarted]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Images/icon.png')}
        style={styles.imageStyle}></Image>
      <Text style={styles.appNameStyle}>CoinGenko</Text>
      <ActivityIndicator size="large" color={ThemeConstants.PRIMARY_COLOR} />
    </View>
  );
};

export default SplashScreen;
