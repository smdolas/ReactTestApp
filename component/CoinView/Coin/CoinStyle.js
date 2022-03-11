import {StyleSheet, TouchableWithoutFeedbackBase} from 'react-native';
import {Dimensions} from 'react-native';
import ThemeConstants from '../../../styles/ThemeConstants';

const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  coinContainer: {
    alignItems: 'center',
    backgroundColor: ThemeConstants.GRAY_LIGHT,
    height: windowHeight,
  },

  coinView: {
    height: 500,
    width: 350,
    marginTop: 50,
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: 'white',
    shadowColor: ThemeConstants.GRAY_DARK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  coinIcon: {
    height: 150,
    width: 150,
    marginTop: 30,
  },

  coinText: {
    color: ThemeConstants.GRAY,
    fontSize: ThemeConstants.FONT_SIZE_25,
    marginTop: 20,
  },

  coinHeader: {
    color: ThemeConstants.GRAY,
    fontSize: ThemeConstants.FONT_SIZE_40,
  },

  coinSymbol: {
    marginTop: 5,
    fontSize: ThemeConstants.FONT_SIZE_20,
    color: ThemeConstants.GRAY,
  },
});
