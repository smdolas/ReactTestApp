import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';

import ThemeConstants from '../../styles/ThemeConstants';
import {styles} from './SplashScreenStyle';

/**
 * (Splashscreen) When app launches this is component that displays
 *
 * isTimeDownCounterStarted flag to start count down to naviagte to next screen
 */

//
const SPLASHSCREEN_DISPLAY_TIME = 2000;

const SplashScreen = ({navigation}) => {
  const [isTimeDownCounterStarted, setTimeDownCounterStarted] = useState(false);

  //after 2 seconds it will navigates to Coin List view
  useEffect(() => {
    if (!isTimeDownCounterStarted) {
      setTimeout(() => {
        navigation.replace('CoinList');
      }, SPLASHSCREEN_DISPLAY_TIME);
      setTimeDownCounterStarted(true);
    }
  }, [isTimeDownCounterStarted]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.imageStyle}></Image>
      <Text style={styles.appNameStyle}>CoinGenko</Text>
      <ActivityIndicator size="large" color={ThemeConstants.PRIMARY_COLOR} />
    </View>
  );
};

export default SplashScreen;
