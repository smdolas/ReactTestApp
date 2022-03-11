import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './CoinItemStyle';

/**
 *  (Coinitem) This component will render the single coin in the list which is getting rendered in the coinlist component
 *
 * onPress {function} this is function which gets call on touch of coin item(list item)
 * item {object} this is object containing details to display coin item
 *  */

const CoinItem = ({onPress, item}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.coinItemMainContainer}>
      <View style={styles.coinItemColumn}>
        <Text style={styles.coinItemTextStyle}>{item.name}</Text>
      </View>
      <View style={styles.coinItemColumn}>
        <Image style={styles.coinImage} source={{uri: item.image}} />
        <Text style={styles.coinSymbol}>{item.symbol.toUpperCase()}</Text>
      </View>
      <View style={styles.coinItemColumn}>
        <Text style={styles.coinItemTextStyle}>€{item.current_price}</Text>
      </View>
      <View style={styles.coinItemColumn}>
        <Text style={styles.coinItemTextStyle}>€{item.high_24h}</Text>
      </View>
      <View style={styles.coinItemColumn}>
        <Text style={styles.coinItemTextStyle}>€{item.low_24h}</Text>
      </View>

      <View style={styles.coinItemHorizontalLine} />
    </TouchableOpacity>
  );
};

export default CoinItem;
