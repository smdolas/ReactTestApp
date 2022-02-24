import React from 'react';
import {View, Text, Pressable, Linking} from 'react-native';
import styles from './InfoDetailStyle';

const InfoDetail = props => {
  const onPressOpenLink = link => {
    Linking.openURL('https://' + link).catch(err =>
      console.error('Error', err),
    );
  };

  return (
    <View style={styles.formControl}>
      <View style={styles.cointainer}>
        <Text style={styles.keyNameStyle}>{props.keyName}</Text>
        {props.keyValueType == 'link' && (
          <Pressable onPress={onPressOpenLink.bind(this, props.keyValue)}>
            <Text style={styles.keyLinkValueStyle}>{props.keyValue}</Text>
          </Pressable>
        )}
        {props.keyValueType != 'link' && (
          <Text style={styles.keyValueStyle}>{props.keyValue}</Text>
        )}
      </View>
    </View>
  );
};

export default InfoDetail;
