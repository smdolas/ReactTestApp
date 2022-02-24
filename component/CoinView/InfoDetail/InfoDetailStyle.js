import {StyleSheet, Text, View} from 'react-native';
import ThemeConstants from '../../../styles/ThemeConstants';

export const styles = StyleSheet.create({
  formControl: {
    width: '100%',
  },
  cointainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 5,
    borderRadius: 5,
    barderColor: ThemeConstants.WHITE,
  },
  keyNameStyle: {
    flex: 1,
    textAlign: 'left',
    color: ThemeConstants.LABEL_FONT_COLOR_GRAY,
  },
  keyLinkValueStyle: {
    flex: 1,
    textAlign: 'right',
    color: ThemeConstants.PRIMARY_COLOR,
  },
  keyValueStyle: {
    flex: 1,
    textAlign: 'right',
    color: ThemeConstants.FONT_COLOR_GRAY,
  },
});

export default styles;
