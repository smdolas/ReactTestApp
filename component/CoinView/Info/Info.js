import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import InfoDetail from '../InfoDetail/InfoDetail';
import {SafeAreaView} from 'react-native-safe-area-context';
import HTML from 'react-native-render-html';
import coinViewStyle from '../CoinViewStyle';

//THis component will render the Genesis, homepage and description of the coin
const Info = props => {
  const details = {...props.route.params};
  const {width} = useWindowDimensions();
  return Object.keys(details).length === 0 ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView>
      <ScrollView>
        <View style={coinViewStyle.container}>
          <View style={coinViewStyle.topContainer}>
            <View style={{width: '100%'}}>
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
          <Text style={coinViewStyle.keyLabel}>Description: </Text>
          <HTML
            contentWidth={width}
            source={{
              html: details.description.en.replace(/(\r\n|\n|\r)/gm, '<br/>'),
            }}
            tagsStyles={{
              a: coinViewStyle.linkTagStyle,
              body: coinViewStyle.bodyStyle,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Info;
