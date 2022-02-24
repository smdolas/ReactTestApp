import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, FlatList, Text} from 'react-native';
import CoinItem from '../CoinItem/CoinItem';
import coinListStyle from './CoinListStyle';
import axios from 'axios';

//This component will show all the list of the Crypto coins
const CoinList = ({navigation}) => {
  //coinsmarketdata will collect all the cryptocurrency details consumed through API
  const [coinsmarketdata, setCoinsmarketdata] = useState([]);

  const [isdataempty, setIsdataempty] = useState(true);

  const getMarketdata = () => {
    //this API is consumed to get all the crypto coins details
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'EUR',
        },
      })
      .then(res => {
        setCoinsmarketdata(res.data);
        setIsdataempty(false);
      });
  };

  useEffect(() => {
    getMarketdata();
  }, []);

  const renderItem = ({item}) => (
    //Coinitem is getting rendered to show the single coin in the list
    <CoinItem
      // jump to component coinview in the stack navigation which will render the detail of each coin
      onPress={() => navigation.navigate('Coinview', {coinid: item.id})}
      item={item}
    />
  );

  return (
    <View style={coinListStyle.coinListView}>
      <View
        style={{
          marginTop: 0,
          marginBottom: 5,
          backgroundColor: '#F5F5F5',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 40,
        }}>
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
      <View
        style={{
          height: 1,
          marginBottom: 3,
          marginTop: 0,
          backgroundColor: '#E6ECF0',
        }}
      />
      {isdataempty ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={coinsmarketdata}
          keyExtractor={data => data.id}
          renderItem={renderItem}></FlatList>
      )}
    </View>
  );
};

export default CoinList;
