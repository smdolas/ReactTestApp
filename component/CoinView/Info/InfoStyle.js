import {StyleSheet} from 'react-native';
import ThemeConstants from '../../../styles/ThemeConstants';

export default styles = StyleSheet.create({
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
  infoItemContainer: {
    width: '100%',
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
