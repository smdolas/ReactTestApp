import {StyleSheet} from 'react-native';
import ThemeConstants from '../../styles/ThemeConstants';

export default styles = StyleSheet.create({
  coinItemMainContainer: {
    height: 50,
    marginTop: 5,
    backgroundColor: ThemeConstants.WHITE_SMOKE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coinItemColumn: {
    backgroundColor: ThemeConstants.TRANSPARENT,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinItemHorizontalLine: {
    height: 1,
    marginTop: 49,
    backgroundColor: ThemeConstants.BORDER_COLOR,
    position: 'absolute',
    width: '100%',
  },
  coinImage: {
    width: 15,
    height: 15,
  },
  coinSymbol: {
    fontSize: ThemeConstants.FONT_SIZE_10,
    textAlign: 'center',
  },
  coinItemTextStyle: {
    fontSize: ThemeConstants.FONT_SIZE_10,
  },
});
