import {StyleSheet, TouchableWithoutFeedbackBase} from 'react-native';
import {Dimensions} from 'react-native';
import ThemeConstants from '../../styles/ThemeConstants';

const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  tabBarLabelStyle: {fontSize: ThemeConstants.FONT_SIZE_12},
  tabBarStyle: {backgroundColor: ThemeConstants.GRAY_LIGHT},
  tabBarIndicatorStyle: {
    backgroundColor: ThemeConstants.FOCUSED_TAB_GREEN,
    marginLeft: 42,
    width: 120,
    height: 3,
  },
});
