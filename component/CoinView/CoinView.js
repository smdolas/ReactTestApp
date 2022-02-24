import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, ActivityIndicator, Text} from 'react-native';
import Coin from './Coin/Coin';
import Info from './Info/Info';
import axios from 'axios';

const Toptab = createMaterialTopTabNavigator();

// this component will render the both the Coin and Info component in MaterialTopTab navigation
const Coinview = props => {
  const {coinid} = props.route.params;
  const [coindata, setCoindata] = useState({});

  const getcoindata = () => {
    axios.get('https://api.coingecko.com/api/v3/coins/' + coinid).then(res => {
      setCoindata({...res.data});
    });
  };
  useEffect(() => {
    getcoindata();
  }, []);
  return Object.keys(coindata).length === 0 ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <Toptab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'F0F0F0'},
        tabBarIndicatorStyle: {
          backgroundColor: '#9ACD32',
          marginLeft: 42,
          width: 120,
          height: 3,
        },
      }}>
      <Toptab.Screen
        name="Coin"
        component={Coin}
        options={{
          title: ({color, focused}) => (
            <Text
              style={{
                color: focused ? '#9ACD32' : 'grey',
              }}>
              Coin
            </Text>
          ),
        }}
        initialParams={{...coindata}}
      />
      <Toptab.Screen
        name="Info"
        component={Info}
        initialParams={{...coindata}}
        options={{
          title: ({color, focused}) => (
            <Text style={{color: focused ? '#9ACD32' : 'grey'}}>Info</Text>
          ),
        }}
      />
    </Toptab.Navigator>
  );
};

export default Coinview;
