import {StyleSheet, Text, View} from 'react-native';
import ThemeConstants from '../../styles/ThemeConstants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    resizeMode: 'contain',
  },
  appNameStyle: {
    fontSize: 30,
    color: ThemeConstants.FONT_COLOR_GRAY,
    textAlign: 'center',
  },
});

export default styles;
