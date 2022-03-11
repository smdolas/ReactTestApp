import React from 'react';
import {View, Text, Pressable, Linking} from 'react-native';
import styles from './InfoDetailStyle';

/**
 * (Infodetail) This component will show the detailed description of the coin
 * keyValueType {string} It's value can be 'default' or 'link'. Default will display plain text, Link will display value in link style and on click of value it will open link in browser.
 * keyName {string} It will display as label
 * keyValue {object} It will display as value. If keyVlaueType is 'default' then it will display plain text, otherwise if it is 'link' it will display value in link style and on click of value it will open link in browser.
 *
 * onPressOpenLink {function} when user clicks on link, it opens link in browser
 *  */

const InfoDetail = ({keyValueType, keyName, keyValue}) => {
  /**
   * when user clicks on link, it opens link in browser.
   * @param {string} link link to be open in new browser
   */
  const onPressOpenLink = link => {
    Linking.openURL('https://' + link).catch(err =>
      console.error('Error', err),
    );
  };

  return (
    <View style={styles.formControl}>
      <View style={styles.cointainer}>
        <Text style={styles.keyNameStyle}>{keyName}</Text>
        {keyValueType == 'link' && (
          <Pressable
            onPress={keyValue => {
              onPressOpenLink(keyValue);
            }}>
            <Text style={styles.keyLinkValueStyle}>{keyValue}</Text>
          </Pressable>
        )}
        {keyValueType != 'link' && (
          <Text style={styles.keyValueStyle}>{keyValue}</Text>
        )}
      </View>
    </View>
  );
};

export default InfoDetail;
