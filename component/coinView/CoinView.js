import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, ActivityIndicator, Text} from 'react-native';

import axios from 'axios';

import Coin from './coin/Coin';
import Info from './info/Info';
import styles from './CoinViewStyle';
import ThemeConstants from '../../styles/ThemeConstants';
import AppURL from '../../utils/AppURL';

/**
 * (Coinview) (this component will render the both the Coin and Info component in MaterialTopTab navigation)
 *  coinId <char> (will have the id of the coin which we want to fetch)
 *  coinData <Object> (will have the details of the coin for the given coind id)
 */

//TopTab responsible to render navigation top bar
const TopTab = createMaterialTopTabNavigator();

const CoinView = ({route}) => {
  const {coinId} = route.params;
  const [coinData, setCoinData] = useState({});

  /**
   * Fetches coin details from api
   */
  const getCoinData = () => {
    axios.get(AppURL.FETCH_COIN_ITEM_DETAILS + coinId).then(res => {
      setCoinData({...res.data});
    });
  };

  useEffect(() => {
    getCoinData();
  }, []);

  return Object.keys(coinData).length === 0 ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {...styles.tabBarLabelStyle},
        tabBarStyle: {...styles.tabBarStyle},
        tabBarIndicatorStyle: {...styles.tabBarIndicatorStyle},
      }}>
      <TopTab.Screen
        name="Coin"
        component={Coin}
        options={{
          title: ({color, focused}) => (
            <Text
              style={{
                color: focused
                  ? ThemeConstants.FOCUSED_TAB_GREEN
                  : ThemeConstants.GRAY,
              }}>
              Coin
            </Text>
          ),
        }}
        initialParams={{...coinData}}
      />
      <TopTab.Screen
        name="Info"
        component={Info}
        initialParams={{...coinData}}
        options={{
          title: ({color, focused}) => (
            <Text
              style={{
                color: focused
                  ? ThemeConstants.FOCUSED_TAB_GREEN
                  : ThemeConstants.GRAY,
              }}>
              Info
            </Text>
          ),
        }}
      />
    </TopTab.Navigator>
  );
};

export default CoinView;
