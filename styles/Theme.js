import {StyleSheet} from 'react-native';
import ThemeConstants from './ThemeConstants';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 25,
    height: 25,
  },
  headerTitle: {
    fontWeight: 'bold',
    color: ThemeConstants.FONT_COLOR_GRAY,
    paddingLeft: 5,
    fontSize: 16,
  },
});
