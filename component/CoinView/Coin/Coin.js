import React from 'react';
import {Image, Text, View, ActivityIndicator} from 'react-native';

import styles from './CoinStyle';

/**
 * (Coin) this component will render the current price , image and name of the coin.
 * (details) detail of the coin passed as props in route object
 **/

const Coin = ({route}) => {
  const details = {...route.params};
  return Object.keys(details).length === 0 ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.coinContainer}>
      <View style={styles.coinView}>
        <Text style={styles.coinHeader}>{details.name}</Text>
        <Image style={styles.coinIcon} source={{uri: details.image.large}} />
        <Text style={styles.coinSymbol}>{details.symbol.toUpperCase()}</Text>

        {details.hashing_algorithm === null ? null : (
          <Text style={styles.coinText}>{details.hashing_algorithm}</Text>
        )}
        <Text style={styles.coinText}>
          €{details.market_data.current_price.eur}
        </Text>
      </View>
    </View>
  );
};

export default Coin;
