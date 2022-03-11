import React from 'react';
import {View, Image, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import CoinList from '../coinList/CoinList';
import CoinView from '../coinView/CoinView';
import SplashScreen from '../splashScreen/SplashScreen';
import Theme from '../../styles/Theme';

const Stack = createStackNavigator();

/**
 * This Component will keep the routes of each stack navigation screen
 **/
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{
            headerTitle: () => (
              <View style={Theme.headerContainer}>
                <Image
                  style={Theme.headerImage}
                  source={require('../../assets/images/icon.png')}
                />
                <Text style={Theme.headerTitle}>CoinGecko Market</Text>
              </View>
            ),
          }}
          name="CoinList"
          component={CoinList}
        />
        <Stack.Screen
          options={{
            headerStyle: {...Theme.headerStyle},
            title: 'Coin Details',
          }}
          name="CoinView"
          component={CoinView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
