import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// This component will render the single coin in the list which is getting rendered in the coinlist component
const Coinitem = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        height: 50,
        marginTop: 5,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 10}}>{props.item.name}</Text>
      </View>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 15,
            height: 15,
          }}
          source={{uri: props.item.image}}
        />
        <Text style={{fontSize: 10, textAlign: 'center'}}>
          {props.item.symbol.toUpperCase()}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 10}}>€{props.item.current_price}</Text>
      </View>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 10}}>€{props.item.high_24h}</Text>
      </View>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 10}}>€{props.item.low_24h}</Text>
      </View>

      <View
        style={{
          height: 1,
          marginTop: 49,
          backgroundColor: '#E6ECF0',
          position: 'absolute',
          width: '100%',
        }}
      />
    </TouchableOpacity>
  );
};

export default Coinitem;
