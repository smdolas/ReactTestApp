import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import HTML from 'react-native-render-html';

import InfoDetail from '../infoDetail/InfoDetail';
import styles from './InfoStyle';

/**
 * This component will render the Genesis, homepage and description of the coin
 * (details) detail of the coin passed as props in route object
 **/

const Info = ({route}) => {
  const details = {...route.params};
  const {width} = useWindowDimensions();
  return Object.keys(details).length === 0 ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.infoItemContainer}>
              <InfoDetail
                keyName={'HomePage'}
                keyValue={
                  details.links.homepage === null
                    ? ''
                    : details.links.homepage[0]
                }
                keyValueType={'link'}></InfoDetail>

              <InfoDetail
                keyName={'Genesis Date'}
                keyValue={details.genesis_date}
                keyValueType={'default'}></InfoDetail>
            </View>
          </View>
          <Text style={styles.keyLabel}>Description: </Text>
          <HTML
            contentWidth={width}
            source={{
              html: details.description.en.replace(/(\r\n|\n|\r)/gm, '<br/>'),
            }}
            tagsStyles={{
              a: styles.linkTagStyle,
              body: styles.bodyStyle,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Info;
