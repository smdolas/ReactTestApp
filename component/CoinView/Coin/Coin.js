import React from 'react';
import {Image, Text, View, ActivityIndicator} from 'react-native';
import coinViewStyle from '../CoinViewStyle';

//this component will render the current price , image and name of the coin.

const Coin = props => {
  const details = {...props.route.params};
  return Object.keys(details).length === 0 ? (
    <ActivityIndicator />
  ) : (
    <View style={coinViewStyle.homeContainer}>
      <View style={coinViewStyle.homeView}>
        <Text style={coinViewStyle.homeHeader}>{details.name}</Text>
        <Image
          style={coinViewStyle.homeIcon}
          source={{uri: details.image.large}}
        />
        <Text style={{marginTop: 5, fontSize: 20, color: 'grey'}}>
          {details.symbol.toUpperCase()}
        </Text>

        {details.hashing_algorithm === null ? null : (
          <Text style={coinViewStyle.homeText}>
            {details.hashing_algorithm}
          </Text>
        )}
        <Text style={coinViewStyle.homeText}>
          €{details.market_data.current_price.eur}
        </Text>
      </View>
    </View>
  );
};

export default Coin;
