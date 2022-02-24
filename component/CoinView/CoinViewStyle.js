import {StyleSheet, TouchableWithoutFeedbackBase} from 'react-native';
import {Dimensions} from 'react-native';
import ThemeConstants from '../../styles/ThemeConstants';

const windowHeight = Dimensions.get('window').height;

export default coinViewStyle = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: windowHeight,
  },

  homeView: {
    height: 500,
    width: 350,
    marginTop: 50,
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: 'white',
    shadowColor: '#787878',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  homeIcon: {height: 150, width: 150, marginTop: 30},
  homeText: {color: 'grey', fontSize: 25, marginTop: 20},
  homeHeader: {color: 'grey', fontSize: 40},
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 5,
    backgroundColor: ThemeConstants.WHITE,
  },
  topContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    borderRadius: 5,
    borderColor: 'transparant',
    backgroundColor: ThemeConstants.WHITE,
    shadowColor: ThemeConstants.BLACK,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  keyLabel: {
    color: ThemeConstants.LABEL_FONT_COLOR_GRAY,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  linkTagStyle: {
    color: ThemeConstants.PRIMARY_COLOR,
    textDecorationStyle: 'none',
    textDecorationLine: 'none',
  },
  bodyStyle: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    textAlign: 'justify',
    color: ThemeConstants.FONT_COLOR_GRAY,
  },
});
