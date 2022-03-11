import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, FlatList, Text} from 'react-native';

import axios from 'axios';

import CoinItem from '../coinItem/CoinItem';
import coinListStyle from './CoinListStyle';
import AppURL from '../../utils/AppURL';

/**
 * (CoinList) This component will show all the list of the Crypto coins
 * coinsMarketData <Object> (fetch all the coins details in JSON format )
 * isDataEmpty flag to check coins details not fetched from api
 */

const CoinList = ({navigation}) => {
  const [coinsMarketData, setCoinsMarketData] = useState([]);

  const [isDataEmpty, setIsDataEmpty] = useState(true);

  /**
   * Fetches coin list data from api
   */
  const getMarketData = () => {
    //this API is consumed to get all the crypto coins details
    axios
      .get(AppURL.FETCH_COIN_LIST_DETAILS, {
        params: {
          vs_currency: 'EUR',
        },
      })
      .then(res => {
        setCoinsMarketData(res.data);
        setIsDataEmpty(false);
      })
      .catch(error => {
        setCoinsMarketData([]);
        setIsDataEmpty(false);
      });
  };

  useEffect(() => {
    getMarketData();
  }, []);

  /**
   * Returns jsx  to render list item view
   * @param {object} item object containing details of coin item
   * @returns {jsx} returns list item view
   */
  const renderItem = ({item}) => (
    //Coinitem is getting rendered to show the single coin in the list
    <CoinItem
      // jump to component coinview in the stack navigation which will render the detail of each coin
      onPress={() => navigation.navigate('CoinView', {coinId: item.id})}
      item={item}
    />
  );

  return (
    <View style={coinListStyle.coinListView}>
      <View style={coinListStyle.coinListViewHeaderContainer}>
        <View style={coinListStyle.coinListTextContainer}>
          <Text style={coinListStyle.coinListText}>NAME</Text>
        </View>
        <View style={coinListStyle.coinListTextContainer}>
          <Text style={coinListStyle.coinListText}>COIN</Text>
        </View>
        <View style={coinListStyle.coinListTextContainer}>
          <Text style={coinListStyle.coinListText}>PRICE</Text>
        </View>
        <View style={coinListStyle.coinListTextContainer}>
          <Text style={coinListStyle.coinListText}>24H HIGH</Text>
        </View>
        <View style={coinListStyle.coinListTextContainer}>
          <Text style={coinListStyle.coinListText}>24H LOW</Text>
        </View>
      </View>
      <View style={coinListStyle.coinListViewBodyContainer} />
      {isDataEmpty ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={coinsMarketData}
          keyExtractor={data => data.id}
          renderItem={renderItem}></FlatList>
      )}
    </View>
  );
};

export default CoinList;
