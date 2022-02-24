import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View, Image, Text} from 'react-native';
import CoinList from '../CoinList/CoinList';
import Theme from '../../styles/Theme';
import CoinView from '../CoinView/CoinView';
import SplashScreen from '../SplashScreen/SplashScreen';

const Stack = createStackNavigator();

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
                  source={require('../../assets/Images/icon.png')}
                />
                <Text style={Theme.headerTitle}>CoinGecko Market</Text>
              </View>
            ),
          }}
          name="Coinlist"
          component={CoinList}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#F0F0F0',
            },
            title: 'Coin Details',
          }}
          name="Coinview"
          component={CoinView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
